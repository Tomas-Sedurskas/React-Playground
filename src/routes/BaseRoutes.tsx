import { Routes, Route } from "react-router-dom";
import { BaseLayout } from "layouts";
import { Error404Page, FormikPage, HomePage, ReactHookFormPage } from "pages";

export const BaseRoutes = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />} path="/React-Playground/">
        <Route index element={<HomePage />} />
        <Route path="/React-Playground/formik" element={<FormikPage />} />
        <Route
          path="/React-Playground/react-hook-form"
          element={<ReactHookFormPage />}
        />
        <Route element={<Error404Page />} path="*" />
      </Route>
    </Routes>
  );
};
