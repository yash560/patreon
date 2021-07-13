import React, { useState, useRef, useEffect } from "react";
import "./NewProfile.css";
import "../Modal/Modal.css";
import "./dashboard.css";
import "./toggle.css";
import "./sidedrawer.css";
import "./StudentSidebar.css";
import "./importantStyle.css";
import "../Editprofile/ProfileImageModal.css";
import { IoIosArrowBack } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import avatar from "./avatar-edit.png";
import personal from "./personal-website.0111f690.svg";
import linkedin from "./linkedin.2932a798.svg";
import github from "./github.09c9500e.svg";
import heart from "./heart.079db34b.svg";
import badges from "./badges.fbd62946.svg";
import uploadResume from "./resume-selected.178e0255.svg";
import { EditProfile } from "../Editprofile/EditProfile";
import { AddExperience } from "../Editprofile/AddExperience";
import PreferenceModal from "../PreferenceModal/PreferenceModal";
import { SocialMediaModal } from "../SocialMedia/SocialMediaModal";
import { Editor, EditorState, RichUtils } from "draft-js";
import { ExperienceId } from "../ExperienceId/ExperienceId";
import DocumentModal from "../Document/DocumentModal";
import Document from "../Document/Document";
import ProfileImageModal from "../Editprofile/ProfileImageModal";
import SidebarCanva from "../../../Canva/SidebarCanva";
export const NewProfile = ({ user, setUserData }) => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [showAddExpiModal, setShowAddExpiModal] = useState(false);
  const [showPreferenceModal, setShowPreferenceModal] = useState(false);
  const [showSocialModal, setShowSocialModal] = useState(false);
  const [showExpiIdModal, setShowExpiIdModal] = useState(false);
  const [showProfileImageModal, setShowProfileImageModal] = useState(false);
  const [showDocumentModal, setShowDocumentModal] = useState(false);
  const [query, setQuery] = useState(null);
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [rolesArr, setRolesArr] = useState([]);
  const [expisArr, setExpiArr] = useState([]);
  const [skillsArr, setSkillsArr] = useState([]);
  const [locationsArr, setLocationsArr] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [editExpi, setEditExpi] = useState([
    0,
    {
      company: "",
      website: "",
      location: "",
      remote: "",
      title: "",
      from: {
        month: "",
        year: "",
      },
      present: "",
      to: {
        month: "",
        year: "",
      },
      desc: "des",
      editorState: () => EditorState.createEmpty(),
    },
  ]);
  const [socials, setSocials] = useState({
    linkedin: "",
    github: "",
    line: "",
    wechat: "",
    personal: "",
    projects: "",
  });
  const [page, setPage] = useState(1);
  const [resume, setResume] = useState([]);
  const [transcripts, setTranscripts] = useState([]);
  const [workCerti, setWorkCerti] = useState([]);
  const [otherCerti, setOtherCerti] = useState([]);
  const [profilePic, setProfilePic] = useState(null);
  const [edit, setEdit] = useState(false);
  const [editing, setEditing] = useState(false);
  const [suggestions, setSuggestions] = useState([
    { img: "https://i.ibb.co/T1W3Ctq/amwalcom.png", name: "Amwalcom" },
    { img: "https://i.ibb.co/fv0XS7D/ARVORE.png", name: "ARVORE" },
    {
      img: "https://i.ibb.co/5TSTY4C/Administrate.jpg",
      name: "Administrate",
    },
    { img: "https://i.ibb.co/Njp0GMr/Antwork.png", name: "Antwork" },
    { img: "https://i.ibb.co/XZJstjB/Andovar.png", name: "Andovar" },
    { img: "https://i.ibb.co/9nBjbwz/Arthur-AI.png", name: "ArthurAI" },
  ]);
  const [allRoles, setAllRoles] = useState([
    "IT System Administrator",
    "Sales",
    "Data Scientist",
    "Data Engineer",
    "ML Engineer",
    "Back End Developer",
    "Product Manager",
    "HR",
    "Full Stack Developer",
    "Front End Developer",
    "Business Operstions",
    "Finance",
    "Legal",
    "Product Designer",
    "Devops Engineer",
    "Marketing",
    "Systems Engineer",
    "IOS Engineer",
    "Consulting",
    "Android Engineer",
    "Supply Chain Management",
    "Network Engineer",
    "Content Strategist",
    "Security Engineer",
    "Recruiting",
    "Accounting",
    "Hardware Engineer",
    "Graphic Designer",
    "Logistics Coordinator",
    "Copywriting",
    "Not Sure Yet",
  ]);
  const [allExpis, setAllExpis] = useState([
    "Business",
    "Sales",
    "Marketing",
    "Networking",
    "Systems",
    "Backend",
    "Security",
    "Frontend",
    "Data Science",
    "Testing",
    "Product Management",
    "Finance",
    "Hardware",
    "UI/UX Design",
    "Full Stack",
    "Mobile",
    "Product Design",
    "Machine Learning",
    "Accounting",
    "Trading",
    "Art",
    "Legal",
    "Biotech",
  ]);
  const [allSkills, setAllSkills] = useState([
    "Angular js",
    "Apache spark",
    "C",
    "C++",
    "Kotlin",
    "Java",
    "Python",
    "Node js",
    "React js",
    "Linux",
    "Github",
    "SQL",
    "MongoDB",
  ]);
  const [allLocations, setAllLocations] = useState([
    "Totally Open",
    "Remote",
    "Atlanta, GA",
    "Austin, TX",
    "Boston, MA",
    "Chicago, IL",
    "Denver, CO",
    "Los Angeles, CA",
    "Nashville, TN",
    "New York, NY",
    "Raleigh, NC",
    "San Diego, CA",
    "San Francisco, CA",
    "Seattle, WA",
    "Wilmington, DE",
    "Houston, TX",
    "Dallas, TX",
    "Detroit MI",
  ]);
  useEffect(() => {
    if (page == 2) window.scrollTo(0, 0);
  }, [page]);
  const openEditProfileModal = () => {
    setShowEditProfileModal((prev) => !prev);
    scrollRecord();
  };
  const openAddExpiModal = () => {
    setShowAddExpiModal((prev) => !prev);

    scrollRecord();
  };
  const openPreferenceModal = (q) => {
    setQuery(q);
    scrollRecord();
    setShowPreferenceModal((prev) => !prev);
  };
  const openSocialModal = () => {
    setShowSocialModal((prev) => !prev);
    scrollRecord();
  };
  const openDocumentModal = () => {
    setShowDocumentModal((prev) => !prev);
    scrollRecord();
  };
  const openExpiIdModal = () => {
    setShowExpiIdModal((prev) => !prev);
    scrollRecord();
  };
  const openProfileImageModal = () => {
    setShowProfileImageModal((prev) => !prev);
    scrollRecord();
  };
  const save = (result, all) => {
    setRolesArr(result);
    setAllRoles(all);
  };
  const savePrefExpi = (result, all) => {
    setExpiArr(result);
    setAllExpis(all);
    //console.log(result, all);
  };
  const saveSkills = (result, all) => {
    setAllSkills(all);
    setSkillsArr(result);
  };
  const saveLocations = (result, all) => {
    setLocationsArr(result);
    setAllLocations(all);
  };
  const saveExpi = (result) => {
    //console.log(result);
    setEditorState(result.editorState);
    setExperiences([...experiences, result]);
  };
  const saveProfilePic = (image) => {
    setProfilePic(image);
  };
  const editCurrExp = (result, index) => {
    let currExp = [...experiences];
    currExp[index] = result;
    setExperiences(currExp);
    setEditorState(result.editorState);
  };

  const deleteExpi = (index) => {
    let newState = [...experiences];

    let deletedState = newState.filter((ele, i) => {
      return index != i;
    });

    setExperiences(deletedState);
  };
  const saveSocials = (result) => {
    setSocials(result);
  };
  const [editDoc, setEditDoc] = useState({});
  const [docIndex, setDocIndex] = useState(0);
  // const [docType, setDocType] = useState('');
  const editDocument = (type, index) => {
    console.log("editing...");
    setEditing(true);
    if (type == "resume") {
      let resumeFile = resume[index];
      setDocIndex(index);
      setEditDoc(resumeFile);
      openDocumentModal();
    }
    if (type == "transcripts") {
      let tFile = transcripts[index];
      setDocIndex(index);
      setEditDoc(tFile);
      openDocumentModal();
    }
    if (type == "workcerti") {
      let wFile = workCerti[index];
      setDocIndex(index);
      setEditDoc(wFile);
      openDocumentModal();
    }
    if (type == "othercerti") {
      let oFile = otherCerti[index];
      setDocIndex(index);
      setEditDoc(oFile);
      openDocumentModal();
    }
  };
  const saveEditedDoc = (result, type, index) => {
    console.log("saving edited doc..");
    if (type == result.type) {
      if (result.type == "resume") {
        let re = [...resume];
        re[index] = result;
        setResume(re);
      }
      if (result.type == "transcripts") {
        let re = [...transcripts];
        re[index] = result;
        setTranscripts(re);
      }
      if (result.type == "workcerti") {
        let re = [...workCerti];
        re[index] = result;
        setWorkCerti(re);
      }
      if (result.type == "othercerti") {
        let re = [...otherCerti];
        re[index] = result;
        setOtherCerti(re);
      }
    } else {
      if (result.type == "resume") {
        let tr = [...resume];
        tr.push(result);
        setResume(tr);
      }
      if (result.type == "transcripts") {
        let tr = [...transcripts];
        tr.push(result);
        setTranscripts(tr);
      }
      if (result.type == "workcerti") {
        let tr = [...workCerti];
        tr.push(result);
        setWorkCerti(tr);
      }
      if (result.type == "othercerti") {
        let tr = [...otherCerti];
        tr.push(result);
        setOtherCerti(tr);
      }
      if (type == "resume") {
        let re = [...resume];
        re.splice(index, 1);
        setResume(re);
      }
      if (type == "transcripts") {
        let re = [...transcripts];
        re.splice(index, 1);
        setTranscripts(re);
      }
      if (type == "workcerti") {
        let re = [...workCerti];
        re.splice(index, 1);
        setWorkCerti(re);
      }
      if (type == "othercerti") {
        let re = [...otherCerti];
        re.splice(index, 1);
        setOtherCerti(re);
      }
    }
  };

  const [fileState, setFileState] = useState({ verfied: false });
  // useEffect(() => {
  //   console.log('useEffecting..', fileState);
  // }, fileState);
  const [file, setFile] = useState(null);
  const saveDocuments = (File) => {
    console.log(fileState);

    if (fileState.type == "resume") {
      let r = [...resume];
      r.push(File);
      setResume(r);
    }
    if (fileState.type == "transcripts") {
      let r = [...transcripts];
      r.push(File);
      setTranscripts(r);
    }
    if (fileState.type == "workcerti") {
      let r = [...workCerti];
      r.push(File);
      setWorkCerti(r);
    }
    if (fileState.type == "othercerti") {
      let r = [...otherCerti];
      r.push(File);
      setOtherCerti(r);
    }
    console.log("resume", resume);
  };
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let resumeUI = resume.map((file, index) => {
    return (
      <div className="file">
        <input type="checkbox"></input>
        <p>
          {file.name}{" "}
          {!file.verified ? (
            <span className="verfication-pending">Verfication pending</span>
          ) : (
            <span className="verfication-done">Verified</span>
          )}
        </p>
        <p>
          <span>{monthNames[file.fileDate.getMonth()]} </span>

          <span>{file.fileDate.getDate()}, </span>

          <span> {file.fileDate.getFullYear()}</span>
        </p>
        <div
          onClick={() => {
            editDocument("resume", index);
          }}
        >
          <FiEdit className="edit" />
          <p>Edit</p>
        </div>
      </div>
    );
  });
  let transcriptsUI = transcripts.map((file, index) => {
    return (
      <div className="file">
        <input type="checkbox"></input>
        <p>
          {file.name}{" "}
          {!file.verified ? (
            <span className="verfication-pending">Verfication pending</span>
          ) : (
            <span className="verfication-done">Verified</span>
          )}
        </p>
        <p>
          <span>{monthNames[file.fileDate.getMonth()]} </span>

          <span>{file.fileDate.getDate()}, </span>

          <span> {file.fileDate.getFullYear()}</span>
        </p>
        <div
          onClick={() => {
            editDocument("transcripts", index);
          }}
        >
          <FiEdit className="edit" />
          <p>Edit</p>
        </div>
      </div>
    );
  });
  let workCertiUI = workCerti.map((file, index) => {
    return (
      <div className="file">
        <input type="checkbox"></input>
        <p>
          {file.name}{" "}
          {!file.verified ? (
            <span className="verfication-pending">Verfication pending</span>
          ) : (
            <span className="verfication-done">Verified</span>
          )}
        </p>
        <p>
          <span>{monthNames[file.fileDate.getMonth()]} </span>

          <span>{file.fileDate.getDate()}, </span>

          <span> {file.fileDate.getFullYear()}</span>
        </p>
        <div
          onClick={() => {
            editDocument("workcerti", index);
          }}
        >
          <FiEdit className="edit" />
          <p>Edit</p>
        </div>
      </div>
    );
  });
  let otherCertiUI = otherCerti.map((file, index) => {
    return (
      <div className="file">
        <input type="checkbox"></input>
        <p>
          {file.name}{" "}
          {!file.verified ? (
            <span className="verfication-pending">Verfication pending</span>
          ) : (
            <span className="verfication-done">Verified</span>
          )}
        </p>
        <p>
          <span>{monthNames[file.fileDate.getMonth()]} </span>

          <span>{file.fileDate.getDate()}, </span>

          <span> {file.fileDate.getFullYear()}</span>
        </p>
        <div
          onClick={() => {
            editDocument("othercerti", index);
          }}
        >
          <FiEdit className="edit" />
          <p>Edit</p>
        </div>
      </div>
    );
  });

  //console.log(socials);
  const rolesUI = rolesArr.map((role) => {
    return <p>{role}</p>;
  });
  const expiUI = expisArr.map((expi) => {
    return <p>{expi}</p>;
  });
  const skillsUi = skillsArr.map((skill) => {
    return <p>{skill}</p>;
  });
  const locationUI = locationsArr.map((location) => {
    return <p>{location}</p>;
  });

  const editModal = (exp, index) => {
    // console.log(exp, index);
    setEdit(true);
    setEditExpi([index, exp]);
    openAddExpiModal();
  };
  const expandText = (exp, index) => {};
  //console.log(rolesArr);
  // console.log(experiences);
  // let box = document.querySelector('#expi0');
  // let width = box.offsetWidth;
  // let height = box.offsetHeight;
  // console.log(height);

  const expUI = experiences.map((exp, index) => {
    let img = [];
    img = suggestions.filter((sugg) => {
      return sugg.name == exp.company;
    });
    //console.log(img[0].img);
    console.log(exp.editorState.getCurrentContent());
    return (
      <>
        <div className={"experiences__card"} id={"expi" + index}>
          <div>
            <img
              src={
                img.length > 0
                  ? img[0].img
                  : "https://wi-images.condecdn.net/image/nrjyg4aGK0k/crop/2040/f/hangout.jpg"
              }
              alt="ss"
            />
            <div
              style={{
                width: "90%",
                fontSize: "0.875rem",
                lineHeight: "150%",
              }}
            >
              <h2 style={{ display: "inline" }}>
                {exp.title}{" "}
                <a style={{ textDecoration: "none" }} href={exp.website}>
                  - {exp.company}
                </a>
              </h2>
              {/* <h2 className='job__company'>
                <a href='ss.eee.com'>{exp.company}</a>
              </h2> */}
              <h3>
                {exp.from.month} {exp.from.year} -{" "}
                {!exp.present ? exp.to.month + " " + exp.to.year : " present"}
              </h3>
              <h4>{exp.location}</h4>
              <div className="see-more">
                {/* <div dangerouslySetInnerHTML={{ __html: exp.desc }} /> */}
                <Editor
                  editorState={exp.editorState}
                  onChange={setEditorState}
                  className="seemore"
                  style={{
                    outline: "none",
                    height: "fit-content",
                    marginBottom: "10px",
                  }}
                  readOnly={true}
                />
                {/* { ? (
                  <p
                    className='see-more'
                    onClick={() => expandText(exp, index)}
                  >
                    See more...
                  </p>
                ) : (
                  <></>
                )} */}
                {/* <div class='DraftEditor-root'>
                                <div class='DraftEditor-editorContainer'>
                                  <div
                                    class='public-DraftEditor-content'
                                    contenteditable='false'
                                    spellcheck='false'
                                    style='outline: none; user-select: text; white-space: pre-wrap; overflow-wrap: break-word;'
                                  >
                                    <div data-contents='true'>
                                      <div
                                        class=''
                                        data-block='true'
                                        data-editor='194hg'
                                        data-offset-key='9cgdd-0-0'
                                      >
                                        <div
                                          data-offset-key='9cgdd-0-0'
                                          class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'
                                        >
                                          <span data-offset-key='9cgdd-0-0'>
                                            <span data-text='true'>@S4vvy</span>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
              </div>
            </div>
            <svg
              class="MuiSvgIcon-root hide"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              onClick={() => editModal(exp, index)}
            >
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z"></path>
            </svg>
          </div>
          <button
            onClick={() => {
              openAddExpiModal();
              setEdit(false);
            }}
          >
            + Add Experience
          </button>
        </div>
      </>
    );
  });
  // console.log(expUI[0].props.children.props.className);

  const scrollRecord = () => {
    var doc = document.documentElement;
    var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    setLeft(left);
    setTop(top);
    document.body.className = "modal-open";
    document.body.style.scrollTo = left;
    document.body.style.scroll = top;
    // document.body.style.overflow = 'hidden';
    // document.body.style.position = 'fixed';
    window.scrollTo(left, top);
  };
  const scrollRemove = () => {
    document.body.className = "";
    // document.body.style.overflow = 'auto';
    // document.body.style.position = 'relative';
    window.scrollTo(left, top);
  };
  //console.log(left, top);

  // File Upload
  const fileInput = useRef(null);
  // const [file, setFile] = useState(null);
  const [resumeDate, setResumeDate] = useState("null");
  Date.prototype.yyyymmdd = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [
      (dd > 9 ? "" : "0") + dd,
      "/",
      (mm > 9 ? "" : "0") + mm,
      "/",
      this.getFullYear(),
    ].join("");
  };

  var date = new Date();
  const onFileChange = async (e) => {
    setFile(e.target.files[0]);
    let date = new Date(e.target.files[0].lastModified);

    setResumeDate(date.yyyymmdd());
  };

  const deleteFile = () => {
    setFile(null);
  };
  const onFileUpload = (e) => {};

  return (
    <>
      <EditProfile
        showModal={showEditProfileModal}
        setShowModal={setShowEditProfileModal}
        scrollRemove={scrollRemove}
        user={user}
        setUserData={setUserData}
      ></EditProfile>
      <AddExperience
        showModal={showAddExpiModal}
        setShowModal={setShowAddExpiModal}
        save={saveExpi}
        scrollRemove={scrollRemove}
        edit={edit}
        editExpi={editExpi}
        currSave={editCurrExp}
        deleteExpi={deleteExpi}
      />
      <PreferenceModal
        showModal={showPreferenceModal}
        setShowModal={setShowPreferenceModal}
        query={query}
        rolesArr={rolesArr}
        expiArr={expisArr}
        skillsArr={skillsArr}
        locationsArr={locationsArr}
        allRoles={allRoles}
        allExpis={allExpis}
        allSkills={allSkills}
        allLocations={allLocations}
        save={save}
        savePrefExpi={savePrefExpi}
        saveSkills={saveSkills}
        saveLocations={saveLocations}
        scrollRemove={scrollRemove}
      />
      <SocialMediaModal
        showModal={showSocialModal}
        setShowModal={setShowSocialModal}
        save={saveSocials}
        scrollRemove={scrollRemove}
      />
      <ExperienceId
        showModal={showExpiIdModal}
        setShowModal={setShowExpiIdModal}
        save={saveSocials}
        scrollRemove={scrollRemove}
      />
      <DocumentModal
        showModal={showDocumentModal}
        setShowModal={setShowDocumentModal}
        scrollRemove={scrollRemove}
        save={saveDocuments}
        fileState={fileState}
        setFileState={setFileState}
        file={file}
        setFile={setFile}
        editing={editing}
        editDoc={editDoc}
        docIndex={docIndex}
        saveEditedDoc={saveEditedDoc}
      />
      <ProfileImageModal
        showModal={showProfileImageModal}
        setShowModal={setShowProfileImageModal}
        scrollRemove={scrollRemove}
        save={saveProfilePic}
      />
      <div
        className="Profile_main"
        // style={
        //   showAddExpiModal ||
        //   showEditProfileModal ||
        //   showPreferenceModal ||
        //   showSocialModal
        //     ? { overflow: 'hidden' }
        //     : {}
        // }
      >
        <div className="left-sidebar-container">
          <SidebarCanva />
        </div>
        <div className="dash-container">
          <div className="mobile hidenav">
            <div class="toggle">
              <div class="toggle-line"></div>
              <div class="toggle-line"></div>
              <div class="toggle-line"></div>
            </div>
            <div className="drawer">
              <div class="header"></div>
              <div className="nav-items"></div>
            </div>
          </div>
          <div className="dash_component" style={{ display: "block" }}>
            {page == 1 ? (
              <div className="newProfile">
                <div className="newProfile__header"></div>
                <div className="newProfile__container">
                  <section class="newProfile__left">
                    <div class="newProfile__userBio">
                      <div class="newProfile__userBio__image__bg"></div>
                      <div>
                        <span class="MuiBadge-root">
                          <input
                            type="file"
                            id="avatar-file"
                            style={{ display: "none" }}
                          ></input>
                          <div class="MuiAvatar-root MuiAvatar-circle MuiAvatar-colorDefault">
                            {profilePic ? (
                              <img
                                className="profile-pic"
                                src={profilePic}
                              ></img>
                            ) : (
                              <>A</>
                            )}
                          </div>
                          <span class="MuiBadge-badge MuiBadge-anchorOriginTopRightCircle">
                            <img
                              src={avatar}
                              alt="avatar-edit"
                              onClick={openProfileImageModal}
                              style={{
                                display: "block",
                                width: "20px",
                                marginLeft: "-35px",
                                cursor: "pointer",
                              }}
                            />
                          </span>
                        </span>
                        <div class="newProfile__userBio__info">
                          <h4>{user.fullName}</h4>
                          <h5>
                            {user.college}, {user.gradYear}
                          </h5>
                          <p>
                            {user.major}, {user.degree}
                          </p>
                          <button
                            class="btn"
                            onClick={openEditProfileModal}
                            style={{ marginTop: "7px" }}
                          >
                            Edit Profile
                          </button>
                        </div>
                      </div>
                    </div>

                    {experiences.length > 0 ? (
                      <div
                        class="newProfile__experience"
                        style={{ background: "#fff" }}
                      >
                        <h1>EXPERIENCE</h1>
                        {expUI}
                        <div></div>
                      </div>
                    ) : (
                      <div class="newProfile__experience">
                        <h1>EXPERIENCE</h1>
                        <div class="newProfile__experience__bg">
                          <h3 style={{ padding: "0px" }}>
                            Add your experience
                          </h3>
                          <p>
                            Stand out to recruiters by adding your past and
                            upcoming experiences
                          </p>
                          <button class="btn" onClick={openAddExpiModal}>
                            Add Experience
                          </button>
                        </div>
                        <div></div>
                      </div>
                    )}

                    <div
                      className={
                        file
                          ? "newProfile__resume newProfile__resume_noback"
                          : "newProfile__resume"
                      }
                    >
                      <h1>RESUME</h1>
                      {/* {file ? (
                        <div class='newProfile__resume__selected'>
                          <img src={uploadResume} alt='resume' />
                          <div>
                            <h3>{file.name}</h3>
                            <p>{resumeDate}</p>
                          </div>
                          <div class='newProfile__resume__selected__icons'>
                            <svg
                              class='MuiSvgIcon-root'
                              focusable='false'
                              viewBox='0 0 24 24'
                              aria-hidden='true'
                              onClick={deleteFile}
                            >
                              <path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'></path>
                            </svg>
                            <input
                              type='file'
                              id='file'
                              name='file'
                              ref={fileInput}
                              onChange={onFileChange}
                            />
                            <svg
                              class='MuiSvgIcon-root'
                              focusable='false'
                              viewBox='0 0 24 24'
                              aria-hidden='true'
                              id='file-selected'
                              onClick={(e) => {
                                fileInput.current && fileInput.current.click();
                                onFileUpload();
                              }}
                            >
                              <path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z'></path>
                            </svg>
                            <input type='file' id='file' name='file' />
                          </div>
                        </div>
                      ) : (
                        <div>
                          <h3>Add your resume</h3>
                          <p>
                            Your resume is essential for recruiters to learn
                            more about you! Upload one as soon as possible to
                            boost your chances of being discovered
                          </p>
                          <input
                            type='file'
                            id='file'
                            name='file'
                            ref={fileInput}
                            onChange={onFileChange}
                          />
                          <button
                            class='btn'
                            onClick={(e) => {
                              // fileInput.current && fileInput.current.click();
                              // onFileUpload();
                              setPage(2);
                            }}
                          >
                            Add Resume
                          </button>
                        </div>
                      )} */}
                      <div>
                        <h3>Add your resume</h3>
                        <p>
                          Your resume is essential for recruiters to learn more
                          about you! Upload one as soon as possible to boost
                          your chances of being discovered
                        </p>
                        <input
                          type="file"
                          id="file"
                          name="file"
                          ref={fileInput}
                          onChange={onFileChange}
                        />
                        <button
                          class="btn"
                          onClick={(e) => {
                            // fileInput.current && fileInput.current.click();
                            // onFileUpload();
                            setPage(2);
                          }}
                        >
                          Add Documents
                        </button>
                      </div>
                    </div>
                  </section>
                  <section class="newProfile__right">
                    <div>
                      <div class="newProfile__preference">
                        <div class="newProfile__role">
                          <h2>
                            Preferred roles
                            <svg
                              class="MuiSvgIcon-root hide"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              onClick={() => openPreferenceModal("roles")}
                            >
                              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z"></path>
                            </svg>
                          </h2>
                          <div></div>
                          {rolesArr.length > 0 ? (
                            <div>{rolesUI}</div>
                          ) : (
                            <p>What are your roles</p>
                          )}
                        </div>
                        <div class="newProfile__exp">
                          <h2>
                            Experience
                            <svg
                              class="MuiSvgIcon-root hide"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              onClick={() => openPreferenceModal("experience")}
                            >
                              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z"></path>
                            </svg>
                          </h2>
                          <div></div>
                          {expisArr.length > 0 ? (
                            <div>{expiUI}</div>
                          ) : (
                            <p>What areas of experience do you have?</p>
                          )}
                        </div>
                        <div class="newProfile__skill">
                          <h2>
                            Skills
                            <svg
                              class="MuiSvgIcon-root hide"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              onClick={() => openPreferenceModal("skills")}
                            >
                              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z"></path>
                            </svg>
                          </h2>
                          <div></div>
                          {skillsArr.length > 0 ? (
                            <div>{skillsUi}</div>
                          ) : (
                            <p>Rank your skills</p>
                          )}
                        </div>
                        <div class="newProfile__loc">
                          <h2>
                            Preferred locations
                            <svg
                              class="MuiSvgIcon-root hide"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              onClick={() => openPreferenceModal("location")}
                            >
                              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z"></path>
                            </svg>
                          </h2>
                          <div></div>
                          {locationsArr.length > 0 ? (
                            <div>{locationUI}</div>
                          ) : (
                            <p>Where do you want to work?</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div class="newProfile__right__elsewhere">
                      <h1>
                        Social Media
                        <svg
                          class="MuiSvgIcon-root hide"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          onClick={openSocialModal}
                        >
                          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z"></path>
                        </svg>
                      </h1>
                      <p>
                        <img src={personal} alt="personal" />
                        {socials.personal == "" ? (
                          "Add Website"
                        ) : (
                          <a href={socials.personal}>{socials.personal}</a>
                        )}
                      </p>
                      <p>
                        <img src={linkedin} alt="linkedin" />
                        {socials.linkedin == "" ? (
                          "Add Linkedin"
                        ) : (
                          <a href={socials.linkedin}>{socials.linkedin}</a>
                        )}
                      </p>
                      <p>
                        <img src={heart} alt="heart" />
                        {socials.projects == "" ? (
                          "Add Passion Project"
                        ) : (
                          <a href={socials.projects}>{socials.projects}</a>
                        )}
                      </p>
                      <p>
                        <img src={github} alt="github" />
                        {socials.github == "" ? (
                          "Add Github"
                        ) : (
                          <a href={socials.github}>{socials.github}</a>
                        )}
                      </p>
                    </div>
                    <div class="newProfile__right__elsewhere-new">
                      <img src={badges} alt="badge" class="badge" />
                      <h6 class="badge-txt">Earn badges</h6>
                      <p class="badge-txt-p">
                        Get noticed by recruitments. Add things like hackathons
                        and classes you’ve TA’d.
                      </p>
                      <button class="btn btn-badge" onClick={openExpiIdModal}>
                        Add ID Card
                      </button>
                    </div>
                  </section>
                </div>
              </div>
            ) : (
              <>
                <div className="newProfile">
                  <div className="newProfile__header">
                    <p className="document__title">Documents</p>
                    <div
                      className="doc__back"
                      onClick={() => {
                        setPage(1);
                      }}
                    >
                      <IoIosArrowBack />
                      <p>Back</p>
                    </div>
                  </div>
                  <div className="newProfile__container">
                    {/* <Document
                      openModal={openDocumentModal}
                      resume={resume}
                      transcripts={transcripts}
                      workCerti={workCerti}
                      otherCerti={otherCerti}
                      editing={editing}
                      setEditing={setEditing}
                      editDocument={editDocument}
                    /> */}
                    <div className="newProfile__document">
                      <div>
                        {/* <h1>DOCUMENTS</h1> */}

                        <button
                          class="btn"
                          onClick={(e) => {
                            openDocumentModal();
                            setEditing(false);
                          }}
                        >
                          + Add New
                        </button>
                      </div>
                      <div className="newProfile__resumedoc">
                        <h2>Resume</h2>
                        {resume.length == 0 ? (
                          <div className="file">
                            <input type="checkbox"></input>
                            <p>
                              Draft Collection
                              <span className="verfication-pending">
                                Verfication pending
                              </span>
                            </p>
                            <p>June 1, 2021</p>
                            <div>
                              <FiEdit className="edit" />
                              <p>Edit</p>
                            </div>
                          </div>
                        ) : (
                          <>{resumeUI}</>
                        )}
                      </div>
                      <div className="newProfile__transcripts">
                        <h2>Transcripts</h2>
                        {transcripts.length == 0 ? (
                          <div className="file">
                            <input type="checkbox"></input>
                            <p>
                              Draft Collection
                              <span className="verfication-done">Verified</span>
                            </p>
                            <p>June 1, 2021</p>
                            <div>
                              <FiEdit className="edit" />
                              <p>Edit</p>
                            </div>
                          </div>
                        ) : (
                          <>{transcriptsUI}</>
                        )}
                      </div>
                      <div className="newProfile__workcertificates">
                        <h2>Work Certificates</h2>
                        {workCerti.length == 0 ? (
                          <div className="file">
                            <input type="checkbox"></input>
                            <p>Draft Collection</p>
                            <p>June 1, 2021</p>
                            <div>
                              <FiEdit className="edit" />
                              <p>Edit</p>
                            </div>
                          </div>
                        ) : (
                          <>{workCertiUI}</>
                        )}
                      </div>
                      <div className="newProfile__othercertificates">
                        <h2>Other Certificates</h2>
                        {otherCerti.length == 0 ? (
                          <div className="file">
                            <input type="checkbox"></input>
                            <p>Draft Collection</p>
                            <p>June 1, 2021</p>
                            <div>
                              <FiEdit className="edit" />
                              <p>Edit</p>
                            </div>
                          </div>
                        ) : (
                          <>{otherCertiUI}</>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
