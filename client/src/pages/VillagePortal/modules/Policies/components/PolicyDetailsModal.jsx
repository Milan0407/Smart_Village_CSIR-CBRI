import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  Download,
  ExternalLink,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";

import SmartTextRenderer
  from "../../../../../components/common/SmartTextRenderer";

const categoryLabels = {
  CENTRAL: "Central Government",
  STATE: "State Government",
};

const getPdfUrl = (scheme = {}) =>
  scheme.pdfUrl ||
  scheme.documentUrl ||
  scheme.document?.url ||
  scheme.pdf?.url ||
  "";

const PolicyDetailsModal = ({
  scheme,
  open,
  onClose,
}) => {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    previousFocusRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = modalRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      const elements = Array.from(focusable || []);

      if (elements.length === 0) return;

      const first = elements[0];
      const last = elements[elements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus?.();
    };
  }, [open, onClose]);

  if (!open || !scheme) return null;

  const imageUrl = scheme.featuredImage?.url;
  const officialUrl = scheme.officialWebsiteUrl;
  const pdfUrl = getPdfUrl(scheme);

  return createPortal(
    <div
      className="modal-backdrop-in fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 px-4 py-6 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="policy-details-title"
        className="modal-panel-in flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-900/10"
      >
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white px-5 py-4 sm:px-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h2
                id="policy-details-title"
                className="text-xl font-bold leading-snug text-slate-950 sm:text-2xl"
              >
                {scheme.schemeName}
              </h2>

              <div className="mt-3 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-700">
                  <ShieldCheck size={15} />
                  {categoryLabels[scheme.category] ||
                    scheme.category}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                  <Users size={16} />
                  {Number(
                    scheme.beneficiariesCount || 0
                  ).toLocaleString()}{" "}
                  Beneficiaries
                </span>
              </div>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close policy details"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              <X size={20} />
            </button>
          </div>
        </header>

        <div className="overflow-y-auto px-5 py-6 sm:px-6">
          <div className="grid gap-7 lg:grid-cols-[360px_minmax(0,1fr)]">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={scheme.featuredImage?.alt || scheme.schemeName}
                  className="h-72 w-full object-contain object-center p-3 sm:h-80 lg:h-[420px]"
                />
              ) : (
                <div className="flex h-72 w-full items-center justify-center bg-gradient-to-br from-blue-50 to-emerald-50 px-6 text-center text-sm font-semibold text-slate-600 sm:h-80 lg:h-[420px]">
                  Policies & Schemes
                </div>
              )}
            </div>

            <div className="min-w-0">
              <SmartTextRenderer
                text={`${scheme.shortDescription || ""}\n\n${scheme.detailedDescription || ""}`}
                className="max-w-none [&_h1]:text-3xl [&_h2]:text-2xl [&_h3]:text-xl [&_p]:text-base [&_p]:leading-7 [&_p]:lg:text-base [&_p]:lg:text-left"
              />
            </div>
          </div>
        </div>

        <footer className="sticky bottom-0 z-10 flex flex-wrap items-center justify-end gap-3 border-t border-slate-200 bg-white px-5 py-4 sm:px-6">
          {officialUrl && (
            <a
              href={officialUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              Visit Official Scheme
              <ExternalLink size={16} />
            </a>
          )}

          {pdfUrl && (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              Download PDF
              <Download size={16} />
            </a>
          )}

          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            Close
          </button>
        </footer>
      </section>
    </div>,
    document.body
  );
};

export default PolicyDetailsModal;
