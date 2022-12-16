import React from "react";
import { GlobalContext } from "../../context/GlobalState";
function Container() {
  function Social_media(context) {
    return (
      <div className="social_media">
        <h1 className="content_subheading">social media</h1>
        <a
          target="_blank"
          rel="noreferrer"
          className="body_18_regular info"
          href={context.information.zalo.toString()}
        >
          <span className="info_icon">
            <i className="bi bi-telephone" />
          </span>{" "}
          SĐT và Zalo: {context.information.phone.toString()}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="body_18_regular info"
          href={`mailto:${context.information.email.toString()}`}
        >
          <span className="info_icon">
            <i className="bi bi-envelope" />
          </span>{" "}
          Email : {context.information.email.toString()}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="body_18_regular info"
          href={context.information.facebook.toString()}
        >
          <span className="info_icon">
            <i className="bi bi-facebook" />
          </span>{" "}
          Facebook: Nguyễn Dương
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="body_18_regular info"
          href={context.information.github.toString()}
        >
          <span className="info_icon">
            <i className="bi bi-github " />
          </span>{" "}
          Github: duongnguyen321
        </a>
      </div>
    );
  }
  function Education(context) {
    return (
      <div className="education">
        <h5 className="title_h5">Education</h5>
        <ul className="box_education">
          <li className="title_education">
            <p className="body_18_medium">{context.education[2016].title}</p>
          </li>
          <li className="body_education">
            <p className="body_14_regular">{context.education[2016].body}</p>
          </li>
          <li className="year_education">
            <p className="body_16_medium">{context.education[2016].year}</p>
          </li>
        </ul>
        <ul className="box_education">
          <li className="title_education">
            <p className="body_18_medium">
              {context.education[2017_2019].title}
            </p>
          </li>
          <li className="body_education">
            <p className="body_14_regular">
              {context.education[2017_2019].body}
            </p>
          </li>
          <li className="year_education">
            <p className="body_16_medium">
              {context.education[2017_2019].year}
            </p>
          </li>
        </ul>
        <ul className="box_education">
          <li className="title_education">
            <p className="body_18_medium">
              {context.education[2019_2021].title}
            </p>
          </li>
          <li className="body_education">
            <p className="body_14_regular">
              {context.education[2019_2021].body}
            </p>
          </li>
          <li className="year_education">
            <p className="body_16_medium">
              {context.education[2019_2021].year}
            </p>
          </li>
        </ul>
        <ul className="box_education">
          <li className="title_education">
            <p className="body_18_medium">{context.education[2021].title}</p>
          </li>
          <li className="body_education">
            <p className="body_14_regular">{context.education[2021].body}</p>
          </li>
          <li className="year_education">
            <p className="body_16_medium">{context.education[2021].year}</p>
          </li>
        </ul>
        <ul className="box_education">
          <li className="title_education">
            <p className="body_18_medium">{context.education[2022].title}</p>
          </li>
          <li className="body_education">
            <p className="body_14_regular">{context.education[2022].body}</p>
          </li>
          <li className="title_education">
            <p className="body_18_medium">
              {context.education[2022].tech2_title}
            </p>
          </li>
          <li className="body_education">
            <p className="body_14_regular">
              {context.education[2022].tech2_body}
            </p>
          </li>
          <li className="year_education">
            <p className="body_16_medium">{context.education[2022].year}</p>
          </li>
        </ul>
      </div>
    );
  }
  function Skills(context) {
    return (
      <div className="skills">
        <h5 className="title_h5">Skills</h5>
        <div className="web_devoloper">
          <p className="body_18_medium skill_title">Web Developer</p>
          <span className="body_14_regular">
            {context.skills.web_devoloper}
          </span>
        </div>
        <div className="other_skills">
          <p className="body_18_medium skill_title">Other Skills</p>
          <span className="body_14_regular">{context.skills.other_skills}</span>
        </div>
      </div>
    );
  }
  function Projects(context) {
    return (
      <div className="projects">
        <h5 className="title_h5">Project</h5>
        <div className="project_item">
          <p className="body_16_medium project_time">
            {context.projects.stravel_html.time}
          </p>
          <p className="body_18_medium project_name">
            {context.projects.stravel_html.name}
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            className="body_14_regular project_link"
            href={context.projects.stravel_html.link}
          >
            Link : {context.projects.stravel_html.name}
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="body_14_regular project_link"
            href={context.projects.stravel_html.code}
          >
            Code : {context.projects.stravel_html.name}
          </a>
          <p className="body_14_regular project_info">
            {context.projects.stravel_html.more}
          </p>
        </div>
        <div className="project_item">
          <p className="body_16_medium project_time">
            {context.projects.stravel.time}
          </p>
          <p className="body_18_medium project_name">
            {context.projects.stravel.name}
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            className="body_14_regular project_link"
            href={context.projects.stravel.link}
          >
            Link : {context.projects.stravel.name}
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="body_14_regular project_link"
            href={context.projects.stravel.code}
          >
            Code : {context.projects.stravel.name}
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="body_14_regular project_link"
            href={context.projects.stravel.api}
          >
            Api : {context.projects.stravel.name}
          </a>
          <p className="body_14_regular project_info">
            {context.projects.stravel.more}
          </p>
        </div>

        <div className="project_item">
          <p className="body_18_medium project_name">My Other projects</p>
          <a
            target="_blank"
            rel="noreferrer"
            className="body_14_regular project_link"
            href={context.projects.other_projects}
          >
            Github Link : {context.projects.other_projects}
          </a>
        </div>
      </div>
    );
  }
  function Hobby(context) {
    return (
      <div className="hobby">
        <h5 className="title_h5 hobby_title">Sở thích</h5>
        <div className="hobby_item">
          <i className="bi bi-music-note icon info_icon" />
          <p className="body_18_regular">{context.hobby.music}</p>
        </div>
        <div className="hobby_item">
          <i className="bi bi-book icon info_icon" />
          <p className="body_18_regular">{context.hobby.learn}</p>
        </div>
        <div className="hobby_item">
          <i className="bi bi-book icon info_icon" />
          <p className="body_18_regular">{context.hobby.read}</p>
        </div>
      </div>
    );
  }
  return (
    <GlobalContext.Consumer>
      {(context) => {
        return (
          <div className="container">
            <hr className="hr" />
            <div className="column col1">
              {Social_media(context)}
              {Education(context)}
              {Skills(context)}
            </div>
            <div className="column col2">
              {Projects(context)}
              {Hobby(context)}
            </div>
          </div>
        );
      }}
    </GlobalContext.Consumer>
  );
}

export default Container;
