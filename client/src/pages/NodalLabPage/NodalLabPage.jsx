import { useEffect, useState } from "react";

import {
  getNodalLaboratory,
} from "../../services/laboratory.service";


import MainLayout
  from "../../layouts/MainLayout";


const NodalLabPage = () => {
  const [laboratory, setLaboratory] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const loadLaboratory =
      async () => {
        try {
          const data =
            await getNodalLaboratory();

          setLaboratory(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    loadLaboratory();
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  if (!laboratory) {
    return (
      <div className="py-20 text-center">
        Nodal Laboratory not found
      </div>
    );
  }

  return (
    <>

      <MainLayout>
      <section
        className="relative h-[500px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            laboratory?.heroImage?.url
              ? `url(${laboratory.heroImage.url})`
              : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            {laboratory.name}
          </h1>

          <p className="mt-4 text-xl">
            Director: {laboratory.directorName}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            About Laboratory
          </h2>

          <p className="text-slate-700 leading-8">
            {laboratory.overview}
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Research Areas
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            {laboratory.researchAreas?.map(
              (item, index) => (
                <li key={index}>
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Key Contributions
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            {laboratory.contributions?.map(
              (item, index) => (
                <li key={index}>
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Contact Information
          </h2>

          <div className="space-y-2">
            <p>{laboratory.address}</p>
            <p>{laboratory.phone}</p>
            <p>{laboratory.email}</p>
          </div>
        </div>

        {laboratory.website && (
          <a
            href={laboratory.website}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Visit Official Website
          </a>
        )}

      </section>

      </MainLayout>
    </>
  );
};

export default NodalLabPage;