import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#D9E1D5] py-[100px]">
      <div className="max-w-[1008px] mx-auto text-center">
        <div className="bg-white rounded-2xl p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Perk Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The perk you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/featured"
            className="inline-flex items-center gap-2 bg-[#008300] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#006600] transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to Featured Perks
          </Link>
        </div>
      </div>
    </div>
  );
}
