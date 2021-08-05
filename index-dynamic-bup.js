import Layout from "../../components/layout";
import React, { useState } from "react";
import { dynFormStructure } from "../../dynFormStructure";
import { DynTextBox } from "components/common/dynControls/DynTextBox";
import { DynOption } from "components/Common/DynControls/DynOption";
import { DynDropDownList } from "components/Common/DynControls/DynDropDownList";
import { DynRadio } from "components/Common/DynControls/DynRadio";
import { DynCheckBox } from "components/Common/DynControls/DynCheckBox";
import { CheckBox } from "components/Common/Controls/CheckBox";
import { Button } from "components/Common/Controls/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import CreateYupSchema from "utils/validation/createYupSchema";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  mobile: yup.number().required()
});


export default function DynForm() {
  // const [values, setValues] = useState({});
  const [page, setPage] = useState(0);
  // const [currentPageData, setCurrentPageData] = useState(formData[page]);
  const [state, setState] = useState({});

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  
  // const { register, handleSubmit, errors } = useForm({
  //   resolver: yupResolver(schema),
  // });

  const onSubmit = (data) => {
  //  e.preventDefault();
    // todo - send data somewhere
    console.log("submit data =",data)
  };

  const callSubmitRequest = () => {
   // e.preventDefault();
    console.log("submitting state",state)

  };

  function onSelect(name,value) {
    setState({ ...state, [name]: value });
    console.log("Onselect ", name);
    console.log("e value ", value);
    console.log("state ", state);  
  }
  
  function handleCheckBox(name,values) {
    setState({ ...state, [name]: values });
    console.log("Onselect ", name);
    console.log("e value ", values);
    console.log("state ", state);  
  }



  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
    console.log("e name ", name);
    console.log("e value ", value);
    console.log("state ", state);
  };

  function SwitchCase(props) {
    switch (props.control) {
      case "textbox":
        return (
          <DynTextBox
            title={props.caption}
            name={props.name}
            option="required"
            placeholder="First Name"
            value={state[props.name]}
            handleBlur={handleChangeText}
            error={errors?.[props.name]?.message}
            reference={register}

            />
        );
      case "dropdown":
        return (        
        <DynDropDownList
           title={props.caption}
            name={props.name}
            list={props.data}
            defaultValue="Select"
            idKey="code"
            valueKey="value"
            handleChange={onSelect}
            value={state[props.name]}
            />
        );
      case "radiobutton":
        return (
          <DynRadio
            caption={props.caption}
            options={props.data}
            value={state[props.name]}
            name={props.name}
            handleChange={onSelect}
            textKey="code"
            valueKey="value"
          />
        );

      case "checkbox":
        return (
          <DynCheckBox
            caption={props.caption}
            options={props.data || []}
            value={state[props.name] || []}
            name={props.name}
            direction="row"
            handleChecked={handleCheckBox}
            textKey="value"
            valueKey="code"
          />
        );
      default:
        return "You are a User";
    }
  }

  return (
    <Layout>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pt-40 ml-40 border flex flex-wrap w-2/3">
          {dynFormStructure.map((dFS, index) => (
            <div className="flex" key={index}>
              <div className="w-80 p-10 border border-green-200">
                <SwitchCase
                  control={dFS.control}
                  name={dFS.name}
                  caption={dFS.caption}
                  data={dFS.value}
                />
              </div>
            </div>
          ))}
        </div>
        <Button
                width="w-72"
                theme="yellow-contained"
                type="submit"
                handleClick={callSubmitRequest}
              >
                Submit
              </Button>
      </form>
      state = {JSON.stringify(state)}
    </Layout>
  );
}
