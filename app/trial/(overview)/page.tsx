import Pagination from '@/app/ui/invoices/pagination';
import Search from '@app/ui/Search';
import Table from '@/app/ui/Table';
import { CreateButton } from '@/app/ui/button';
import { TableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchTrialsPages, fetchFilteredTrials } from './actions';

export const Page = async (props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchTrialsPages(query);
  const data = await fetchFilteredTrials(query, totalPages);
  console.log(data);
  return (
    <div className="w-full">
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Поиск по соревнованиям..." />
        <CreateButton href="/trial/create" name="Создать соревнование" />
      </div>
      <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
        <Table
          data={data}
          cols={['Название', 'Дата начала', 'Дата окончания', 'Судьи', 'Описание']}
        />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};
export default Page;
