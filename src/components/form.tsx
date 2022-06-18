import { ChangeEventHandler, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { order } from "../types/order";
import styles from "./form.module.css";

import FormError from "./form/error";
import FormInput from "./form/input";
import FormLabel from "./form/label";
import PageContainer from "./pageContainer";

const OrderForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<order>({
    mode: "onChange",
  });
  const [submitted, setSubmitted] = useState(false);
  const [complete, setComplete] = useState(false);

  const onSubmit: SubmitHandler<order> = async (data) => {
    setSubmitted(true);
    setTimeout(() => {
      setComplete(true);
    }, 2000);

    // TODO: Use the code below to connect a real submission API to the form
    //   const invokeURL = "https://{our-awesome-order-form-endpoint}";
    //   await fetch(`${invokeURL}/contact-form`, {
    //     method: "post",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   }).then(async (response) => {
    //     response.json().then((status) => {
    //       if (status.result === "success") {
    //         setComplete(true);
    //       }
    //     });
    //   });
  };

  return (
    <>
      {!submitted && !complete && (
        <>
          <h2>What are you looking for?</h2>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <div className={styles.inputGroup}>
              <FormLabel htmlFor={"type"}>Type</FormLabel>

              <select {...register("type")} className={styles.select}>
                <option value="capacitor">Capacitor</option>
                <option value="resistor">Resistor</option>
                <option value="transistor">Transistor</option>
              </select>

              {/* errors will return when field validation fails  */}
              <FormError visible={!!errors.type}>
                This field is required
              </FormError>
            </div>

            <div className={styles.inputGroup}>
              <FormLabel htmlFor={"nominal_capacitance"}>
                Nominal Capacitance
              </FormLabel>

              <FormInput
                type="number"
                defaultValue={1}
                {...register("nominal_capacitance", { required: true })}
              />

              {/* errors will return when field validation fails  */}
              <FormError visible={!!errors.nominal_capacitance}>
                This field is required
              </FormError>
            </div>

            <div className={styles.inputGroup}>
              <FormLabel htmlFor={"working_voltage"}>Working Voltage</FormLabel>

              <FormInput
                type="number"
                defaultValue={1}
                {...register("working_voltage", { required: true })}
              />

              {/* errors will return when field validation fails  */}
              <FormError visible={!!errors.working_voltage}>
                This field is required
              </FormError>
            </div>

            <div className={styles.inputGroup}>
              <FormLabel htmlFor={"tolerance"}>Tolerance (0 to 1)</FormLabel>

              <div className={styles["inputGroup__horizontal"]}>
                <FormInput
                  type="number"
                  value={watch("tolerance")}
                  min="0"
                  max="1"
                  step="0.01"
                  onChange={(e) => {
                    setValue("tolerance", parseFloat(e.target.value), {
                      shouldValidate: true,
                    });
                  }}
                />

                <FormInput
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  {...register("tolerance", { required: true })}
                />
              </div>

              {/* errors will return when field validation fails  */}
              <FormError visible={!!errors.tolerance}>
                This field is required
              </FormError>
            </div>

            <div className={styles.inputGroup}>
              <FormLabel htmlFor={"working_temperature"}>
                Working Temperature (C°)
              </FormLabel>

              <FormInput
                type="number"
                defaultValue={100}
                {...register("working_temperature", { required: true })}
              />

              {/* errors will return when field validation fails  */}
              <FormError visible={!!errors.working_temperature}>
                This field is required
              </FormError>
            </div>

            <div className={styles.inputGroup}>
              <FormLabel htmlFor={"working_temperature"}>
                Temperature Coefficient (0 to 1)
              </FormLabel>

              <div className={styles["inputGroup__horizontal"]}>
                <FormInput
                  type="number"
                  value={watch("temperature_coefficient")}
                  min="0"
                  max="1"
                  step="0.01"
                  onChange={(e) => {
                    setValue(
                      "temperature_coefficient",
                      parseFloat(e.target.value),
                      {
                        shouldValidate: true,
                      }
                    );
                  }}
                />

                <FormInput
                  type="range"
                  value={watch("temperature_coefficient")}
                  min="0"
                  max="1"
                  step="0.01"
                  {...register("temperature_coefficient", { required: true })}
                />
              </div>

              {/* errors will return when field validation fails  */}
              <FormError visible={!!errors.temperature_coefficient}>
                This field is required
              </FormError>
            </div>

            <input className={styles.submitBtn} type="submit" />
          </form>
        </>
      )}

      {submitted && !complete && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Submitting...</h2>
        </div>
      )}

      {submitted && complete && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Order submitted.</h2>
        </div>
      )}
    </>
  );
};

export default OrderForm;
