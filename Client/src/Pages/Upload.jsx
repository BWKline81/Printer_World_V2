import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Upload.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import * as motion from "motion/react-client";

const Upload = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
    document.title = "Printer World | Upload";
  }, []);

  let formRef = useRef(null);
  let inputRef = useRef(null);

  const colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Black",
    "White",
    "Gray",
    "Orange",
    "Purple",
    "Pink",
  ];

  const materials = ["PLA", "ABS", "PETG", "TPU", "Nylon", "PC"];

  let [files, setFiles] = useState([]);
  let [email, setEmail] = useState("");
  let [description, setDescription] = useState("");
  let [color, setColor] = useState("None");
  let [material, setMaterial] = useState("None");

  let fileRef = useRef(null);
  let descriptionRef = useRef(null);
  let emailRef = useRef(null);

  const handleFileChange = (e) => {
    console.clear();
    try {
      setFiles((f) => [...f, ...e.target.files]);
      console.log("files: ", files);
      console.log("File(s) uploaded successfully.");
    } catch (e) {
      console.error("Error uploading file(s): ", e);
      window.alert(
        "There was an error uploading your file(s). Please try again."
      );
    }
  };

  const handleDescriptionChange = (e) => {
    console.clear();
    try {
      setDescription(e.target.value);
    } catch (e) {
      console.error("Error updating description: ", e);
      window.alert(
        "There was an error updating your description. Please try again."
      );
    }
  };

  const handleEmailChange = (e) => {
    console.clear();
    try {
      setEmail(e.target.value);
    } catch (e) {
      console.error("Error updating email: ", e);
      window.alert("There was an error updating your email. Please try again.");
    }
  };

  const handleColorChange = (e) => {
    console.clear();
    try {
      setColor(e.target.value);
      console.log(`Color selected: ${e.target.value}`);
    } catch (e) {
      console.error("Error selecting color: ", e);
      window.alert(
        "There was an error selecting your color. Please try again."
      );
    }
  };

  const handleMaterialChange = (e) => {
    console.clear();
    try {
      setMaterial(e.target.value);
      console.log(`Material selected: ${e.target.value}`);
    } catch (e) {
      console.error("Error selecting material: ", e);
      window.alert(
        "There was an error selecting your material. Please try again."
      );
    }
  };

  const submit = () => {
    if (
      files.length === 0 ||
      description === "" ||
      email === "" ||
      color === "None" ||
      material === "None"
    ) {
      window.alert("Please fill in all the required fields.");
    } else {
      window.alert(
        "Your model has been uploaded successfully! We will email you within the next 2 business days to confirm your upload and negotiate payment."
      );
      setFiles = [];
      setDescription("");
      setEmail("");
      setColor("None");
      setMaterial("None");
      fileRef.current.value = "";
      descriptionRef.current.value = "";
      emailRef.current.value = "";
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.Header_container}>
        <Header />
      </div>
      <div className={styles.content_wrap}>
        <div
          className={styles.header_wrap}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <motion.h2 whileHover={{ scale: 1.05, rotate: 0.5 }}>
            Uplaod Your Models
          </motion.h2>
          <div className={styles.line}></div>
          <motion.p whileHover={{ scale: 1.02, rotate: 0.25 }}>
            Have a 3D model you'd like us to print? Upload it here and let us
            handle the rest!
          </motion.p>
        </div>
        <div className={styles.content_container}>
          <div action="" className={styles.form} ref={formRef}>
            <div
              className={styles.upload_section}
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <motion.div
                className={styles.upload_container}
                whileHover={{
                  borderColor: "var(--accent-color)",
                }}
              >
                <i className="fa-solid fa-cloud-arrow-up"></i>
                <input
                  type="file"
                  className={styles.upload_box}
                  accept=".stl, .obj, .3mf, .step, .iges"
                  onChange={() => handleFileChange(event)}
                  required
                  ref={fileRef}
                />
                <label htmlFor="" className={styles.upload_label}>
                  Upload your model here. <br></br> Accepted formats: .STL,
                  .OBJ, .3MF, .STEP, .IGES
                </label>
              </motion.div>
              <motion.p
                className={styles.files_uploaded}
                whileHover={{ scale: 1.05, rotate: 0.5 }}
              >
                Files uploaded ({files.length}):{" "}
                {files.map((file) => file.name).join(", ")}
              </motion.p>
              <motion.button
                onClick={submit}
                className={styles.upload_button}
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.9, rotate: 0, y: 2 }}
              >
                Upload Files
              </motion.button>
            </div>

            <div
              className={styles.extra_info_container}
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <motion.h2
                className={styles.extra_info_header}
                whileHover={{ scale: 1.05, rotate: 0.5 }}
              >
                Additional Information
              </motion.h2>
              <motion.label
                htmlFor=""
                className={styles.extra_info_label}
                whileHover={{ scale: 1.05, rotate: 0.5 }}
              >
                Description of Model
              </motion.label>

              <motion.textarea
                ref={descriptionRef}
                className={styles.textarea}
                required
                onChange={() => handleDescriptionChange(event)}
                whileHover={{
                  borderColor: "var(--accent-color)",
                  borderWidth: "3.5px",
                }}
              ></motion.textarea>

              <div className={styles.email_container}>
                <motion.label
                  htmlFor=""
                  className={styles.extra_info_label}
                  whileHover={{ scale: 1.05, rotate: 0.5 }}
                >
                  Email Address
                </motion.label>

                <motion.input
                  className={styles.input}
                  type="email"
                  onChange={() => handleEmailChange(event)}
                  ref={emailRef}
                  whileHover={{
                    scale: 1.01,
                    border: "3px solid var(--accent-color)",
                  }}
                ></motion.input>
              </div>

              <motion.label
                htmlFor=""
                className={styles.extra_info_label}
                whileHover={{ scale: 1.05, rotate: 0.5 }}
              >
                Material Preferences: {material}
              </motion.label>
              <div className={styles.material_group}>
                {materials.map((mat, index) => {
                  return (
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.2, rotate: 2 }}
                      whileTap={{
                        scale: 0.9,
                        rotate: 0,
                        backgroundColor: "var(--accent-color-dark)",
                        y: 2,
                      }}
                      className={styles.material_option}
                      key={index}
                      onClick={() =>
                        handleMaterialChange({ target: { value: mat } })
                      }
                    >
                      <div className={styles.mat_highlight}></div>
                      <p>{mat}</p>
                    </motion.button>
                  );
                })}
              </div>
              <motion.label
                htmlFor=""
                className={styles.extra_info_label}
                whileHover={{ scale: 1.05, rotate: 0.5 }}
              >
                Color Preference: {color}
              </motion.label>
              <div className={styles.color_group}>
                {colors.map((col, index) => {
                  return (
                    <motion.button
                      type="button"
                      whileHover={{
                        scale: 1.2,
                        rotate: 2,
                        color: col,
                      }}
                      whileTap={{
                        scale: 0.9,
                        rotate: 0,
                        backgroundColor: "var(--accent-color-dark)",
                        y: 2,
                      }}
                      className={styles.color_option}
                      key={index}
                      onClick={() =>
                        handleColorChange({ target: { value: col } })
                      }
                    >
                      <div
                        className={styles.color_highlight}
                        style={{ backgroundColor: col }}
                      ></div>
                      <p>{col}</p>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Upload;
