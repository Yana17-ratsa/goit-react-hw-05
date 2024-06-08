import { useState } from "react";
import { Formik, Form, Field } from "formik";
import toast from "react-hot-toast";

export default function MoviesPage() {
    const [searchQuery, setSearhQuery] = useState("");

    const handleSearch = async (topic) => {
        setSearhQuery(topic);
    }

    return (
        <Formik
        initialValues={{ query: "" }}
          onSubmit={(values, actions) => {
            if (values.query.trim() !== '') {
                handleSearch(values.query);
            actions.resetForm();
            } else {
             toast.error("The search field is empty. Please try again!");
            }
            return
        }}
      >
        <Form>
          <Field type="text" name="query" placeholder="Search movies here" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    );
  }
