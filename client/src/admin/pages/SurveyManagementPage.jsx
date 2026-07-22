import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getAllVillages } from "../services/village.service";
import { getAllStates } from "../services/state.service";
import {
  uploadSurvey,
  getSurveyHistory,
  updateSurveyPublication,
  deleteSurvey
} from "../services/survey.service";

const SurveyManagementPage = () => {
  const [states, setStates] = useState([]);
  const [selectedStateId, setSelectedStateId] = useState("");
  const [villages, setVillages] = useState([]);
  const [filteredVillages, setFilteredVillages] = useState([]);
  const [villageId, setVillageId] = useState("");
  const [deferredVillageId, setDeferredVillageId] = useState("");
  const [year, setYear] = useState("");
  const [file, setFile] = useState(null);
  const [saving, setSaving] = useState(false);
  const [history, setHistory] = useState([]);

  const loadHistory = () => {
    getSurveyHistory()
      .then(setHistory)
      .catch(() => toast.error("Unable to load survey history."));
  };

  useEffect(() => {
    Promise.all([getAllStates(), getAllVillages()])
      .then(([statesList, villagesList]) => {
        setStates(statesList);
        setVillages(villagesList);
      })
      .catch(() => toast.error("Unable to load states or villages."));
    
    loadHistory();
  }, []);

  useEffect(() => {
    if (selectedStateId) {
      const filtered = villages.filter(
        (v) => (v.state?._id || v.state) === selectedStateId
      );
      setFilteredVillages(filtered);
      
      if (deferredVillageId) {
        const hasVillage = filtered.some((v) => v._id === deferredVillageId);
        if (hasVillage) {
          setVillageId(deferredVillageId);
        }
        setDeferredVillageId("");
      } else {
        setVillageId("");
      }
    } else {
      setFilteredVillages([]);
      setVillageId("");
    }
  }, [selectedStateId, villages, deferredVillageId]);

  const submit = async (event) => {
    event.preventDefault();
    if (!selectedStateId || !villageId || !year || !file) {
      return toast.error("Choose state, village, year, and workbook.");
    }
    setSaving(true);
    try {
      const data = new FormData();
      data.append("villageId", villageId);
      data.append("surveyYear", year);
      data.append("file", file);
      await uploadSurvey(data);
      toast.success("Survey processed and saved.");
      setFile(null);
      event.target.reset();
      loadHistory();
    } catch (error) {
      toast.error(error.response?.data?.error?.message || "Upload failed.");
    } finally {
      setSaving(false);
    }
  };

  const togglePublish = async (id, currentStatus) => {
    try {
      await updateSurveyPublication(id, !currentStatus);
      toast.success(`Survey ${!currentStatus ? "published" : "unpublished"} successfully.`);
      loadHistory();
    } catch (err) {
      toast.error("Failed to update publication status.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this survey?")) return;
    try {
      await deleteSurvey(id);
      toast.success("Survey deleted successfully.");
      loadHistory();
    } catch (err) {
      toast.error("Failed to delete survey.");
    }
  };

  const handleReplace = (s) => {
    setSelectedStateId(s.state?._id || s.state);
    setDeferredVillageId(s.village?._id || s.village);
    setYear(s.surveyYear);
    toast.success("Form populated to replace survey. Select a new Excel file.");
  };

  return (
    <div className="space-y-10">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold text-slate-800">Survey Management</h1>
        <p className="mt-2 text-slate-600">
          Upload a VDI workbook for a database village. Select state and village to start.
        </p>

        <form onSubmit={submit} className="mt-8 space-y-5 rounded-xl bg-white p-6 shadow-sm">
          <label className="block text-sm font-medium">
            State
            <select
              required
              value={selectedStateId}
              onChange={(e) => setSelectedStateId(e.target.value)}
              className="mt-1 w-full rounded-lg border p-3"
            >
              <option value="">Select state</option>
              {states.map((s) => (
                <option key={s._id} value={s._id}>
                  {s.name}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm font-medium">
            Village
            <select
              required
              disabled={!selectedStateId}
              value={villageId}
              onChange={(e) => setVillageId(e.target.value)}
              className="mt-1 w-full rounded-lg border p-3 disabled:bg-slate-50 disabled:text-slate-400"
            >
              <option value="">
                {!selectedStateId ? "First select a state" : "Select village"}
              </option>
              {filteredVillages.map((v) => (
                <option key={v._id} value={v._id}>
                  {v.name?.en}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm font-medium">
            Survey year
            <input
              required
              type="number"
              min="1900"
              max="3000"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="mt-1 w-full rounded-lg border p-3"
            />
          </label>

          <label className="block text-sm font-medium">
            Excel workbook (.xlsx)
            <input
              required
              type="file"
              accept=".xlsx"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="mt-1 w-full rounded-lg border p-3"
            />
          </label>

          <button
            disabled={saving}
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white disabled:opacity-60 cursor-pointer animate-none"
          >
            {saving ? "Processing…" : "Process and save survey"}
          </button>
        </form>
      </div>

      {/* Uploaded Surveys List */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-800">Uploaded Surveys</h2>
          <p className="text-sm text-slate-500 mt-1">Manage survey publications, previews, replacements, and deletions.</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 font-semibold">
                <th className="px-6 py-3.5">Village</th>
                <th className="px-6 py-3.5">State</th>
                <th className="px-6 py-3.5">Survey Year</th>
                <th className="px-6 py-3.5">Upload Date</th>
                <th className="px-6 py-3.5">Status</th>
                <th className="px-6 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {history.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-8 text-center text-slate-400">
                    No surveys uploaded yet.
                  </td>
                </tr>
              ) : (
                history.map((s) => (
                  <tr key={s._id} className="hover:bg-slate-50/50 transition">
                    <td className="px-6 py-4 font-medium text-slate-800">{s.village?.name?.en}</td>
                    <td className="px-6 py-4 text-slate-600">{s.state?.name}</td>
                    <td className="px-6 py-4 text-slate-600">{s.surveyYear}</td>
                    <td className="px-6 py-4 text-slate-500">
                      {new Date(s.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        s.isPublished 
                          ? "bg-green-50 text-green-700 border border-green-100" 
                          : "bg-amber-50 text-amber-700 border border-amber-100"
                      }`}>
                        {s.isPublished ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2 whitespace-nowrap">
                      <a
                        href={`/village/${s.village?.slug}/indicators?year=${s.surveyYear}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mr-2"
                      >
                        Preview
                      </a>
                      <button
                        onClick={() => togglePublish(s._id, s.isPublished)}
                        className={`inline-flex items-center text-slate-600 hover:text-slate-900 font-medium mr-2 cursor-pointer`}
                      >
                        {s.isPublished ? "Unpublish" : "Publish"}
                      </button>
                      <button
                        onClick={() => handleReplace(s)}
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium mr-2 cursor-pointer"
                      >
                        Replace
                      </button>
                      <button
                        onClick={() => handleDelete(s._id)}
                        className="inline-flex items-center text-red-600 hover:text-red-800 font-medium cursor-pointer"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SurveyManagementPage;