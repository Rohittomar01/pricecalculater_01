import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type FormContextType = {
  data: any;
  setData: Dispatch<SetStateAction<any>>;
};

type FormDataProps = {
  children: ReactNode;
};

export const FormContext = createContext<null | FormContextType>(null);

export const FormData = ({ children }: FormDataProps) => {
  const [formState, setFormState] = useState<FormContextType>({
    data: "",
    setData: (newData: any) =>
      setFormState((prevState) => ({ ...prevState, data: newData })),
  });

  return (
    <FormContext.Provider value={formState}>{children}</FormContext.Provider>
  );
};
