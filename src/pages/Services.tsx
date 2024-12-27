import DataTable from '../components/DataTable';
import { mockData } from '../data/mockData';

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Our Services
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Team
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our talented professionals are ready to help you achieve your goals.
            Click on any team member to learn more about their expertise.
          </p>
        </div>
        <DataTable data={mockData} />
      </div>
    </div>
  );
}