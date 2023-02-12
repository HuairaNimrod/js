const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    section:[
        {   sectionN: "a",
            room:"b",
            enrolled:"c",
            days:"d",
            instructor:"e"
        },
        {   sectionN: "1",
            room:"2",
            enrolled:"3",
            days:"4",
            instructor:"5"
        },
        {   sectionN: "x",
            room:"y",
            enrolled:"z",
            days:"q",
            instructor:"w"
        }
    ]
  };

  function setCourseInfo(course){
        const courseName = document.querySelector('#courseName');
        const courseCode = document.querySelector('#courseCode');
        courseName.textContent = course.code;
        courseCode.textContent = course.name;
  }

  function renderSections(sections){
        const html = sections.map( (clase) => 
            `<tr>
                <td>${clase.sectionN}</td>
                <td>${clase.room}</td>
                <td>${clase.enrolled}</td>
                <td>${clase.days}</td>
                <td>${clase.instructor}</td>
            </tr>`

        );
        document.querySelector('#sections').innerHTML = html.join("");
  }

  setCourseInfo(aCourse);
  renderSections(aCourse.section);