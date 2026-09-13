import React from "react";
import type { Technology } from "../types/technology";

interface Props {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const StackSidebar: React.FC<Props> = ({ stack, onRemove, onRemoveAll }) => {
  return (
    <aside className="h-fit rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900">Your Stack</h2>
      {stack.length === 0 ? (
        <p className="text-xs text-slate-500">No Technologies Selected yet.</p>
      ) : (
        <p className="text-xs text-slate-500 ">
          {stack.length} Technololies Selected
        </p>
      )}

      {/* Empty State vs Selected State */}
      {stack.length === 0 ? (
      <div className="my-8 flex flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-300 py-10 text-center">
          <p className="text-sm font-medium text-slate-400 ">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <div className="mt-4 space-y-3">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-lg border border-slate-300 p-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-6 w-6 object-contain"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-400">{item.category}</p>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-slate-400 hover:text-red-500 transition-colors"
                aria-label="Remove item"
              >
                ✕
              </button>
            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="mt-4 w-full rounded-lg border border-red-200 py-2 text-xs font-semibold text-red-500 hover:bg-red-50 transition-colors"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
};

export default StackSidebar;
