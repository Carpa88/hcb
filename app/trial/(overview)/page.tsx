import Pagination from '@/app/ui/invoices/pagination';
import Search from '@app/ui/Search';
import Table from '@/app/ui/invoices/table';
import { CreateButton } from '@/app/ui/button';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchTrialsPages } from './actions';

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

  return (
    <div className="w-full">
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Поиск по соревнованиям..." />
        <CreateButton href='/trial/create' name='Создать соревнование'/>
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        {/* <Table query={query} currentPage={currentPage} /> */}
        <p>jsdhfjsdhgf</p>
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} />  */}
      </div>
    </div>
  );
};
export default Page;

// const Page = async() => {
//   const data = await fetchTrials();
//   return (
//     <>
//       <Link
//         href="trial/create"
//         className="flex h-10 items-center rounded-lg bg-slate-600 px-4 text-sm font-medium text-white transition-colors hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
//         >
//         <span className="hidden md:block">Создать новое соревнование</span>{' '}
//         <PlusIcon className="h-5 md:ml-4" />
//       </Link>
//       <Table data={data} cols={['Название соревнования', "Начало", "Окончание", "Судья"]}/>
//     </>
//   )
// }

// export default Page;
