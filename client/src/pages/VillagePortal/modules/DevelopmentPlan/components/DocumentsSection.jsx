import { FileText, Download } from "lucide-react";

const DocumentsSection = ({ plan }) => {
  const documents = plan.documents || [];

  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">

      <div className="flex items-center gap-3 mb-8">

        <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center">

          <FileText
            className="text-orange-600"
            size={22}
          />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Project Documents
          </h2>

          <p className="text-slate-500">
            Reports, DPRs, approvals and supporting files.
          </p>

        </div>

      </div>

      {documents.length === 0 ? (

        <div className="rounded-xl border border-dashed border-slate-300 p-10 text-center">

          <FileText
            className="mx-auto text-slate-400 mb-4"
            size={42}
          />

          <h3 className="text-lg font-semibold text-slate-700">
            No Documents Available
          </h3>

          <p className="mt-2 text-slate-500">
            Documents for this project have not been uploaded yet.
          </p>

        </div>

      ) : (

        <div className="space-y-4">

          {documents.map((doc, index) => (

            <div
              key={index}
              className="flex items-center justify-between rounded-xl border border-slate-200 p-5 hover:bg-slate-50 transition"
            >

              <div>

                <h4 className="font-semibold text-slate-800">
                  {doc.title}
                </h4>

                <p className="text-sm text-slate-500">
                  Supporting document
                </p>

              </div>

              <button
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
              >
                <Download size={18} />

                Download
              </button>

            </div>

          ))}

        </div>

      )}

    </section>
  );
};

export default DocumentsSection;