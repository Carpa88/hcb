const Form = ({
  children,
  title,
  description,
  action,
  buttonState,
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
  action?: (data: FormData) => void;
  buttonState?: boolean;
}) => {
  return (
    <form action={action}>
      <div className="space-y-12">{children}</div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          disabled={buttonState}
          className="text-sm/6 font-semibold text-gray-900"
        >
          Очистить и вернуться
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          disabled={buttonState}
        >
          Сохранить и отправить
        </button>
      </div>
    </form>
  );
};

export default Form;
