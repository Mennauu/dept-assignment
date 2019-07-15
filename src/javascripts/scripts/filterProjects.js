/* Work in progress:
    - Filtering on industry
    - Refactor

    Note: Everything that is commented out has to do with: "Filtering on industry"
*/

import json from '../../html/data/global.json'

(() => {
  const data = json.projects
  const projectsContainer = document.querySelector('.projects-container')
  const workSelect = document.getElementById('work')
  const industrySelect = document.getElementById('industry')

  const removeChildren = (element) => {
    while (element.firstChild) element.removeChild(element.firstChild)
  }

  const filterByWork = (selectValue) => {
    let objectsFilteredByType = []

    for (let project of data) {
      if (selectValue === project.category || selectValue === "all work") {
        objectsFilteredByType.push(project)
      }
    }

    return objectsFilteredByType
  }

  // const filterByIndustry = (selectValue) => {
  //   let objectsFilteredByType = []

  //   for (let project of data) {
  //     if (selectValue === project.industry) {
  //       objectsFilteredByType.push(project)
  //     }
  //   }

  //   return objectsFilteredByType
  // }

  const setDataToHTML = (filteredData) => {
    if (projectsContainer !== null) removeChildren(projectsContainer)

    projectsContainer.insertAdjacentHTML('beforeend',
      '<div class="projects__block projects__block--medium js-animated"></div>'
    )

    const projectsWrapper = document.querySelector('.projects__block')
    const industries = []

    for (let project of filteredData) {
      if (project.image !== null) {
        const HTMLMarkup =
          `<article class="article">
            <a class="article__wrapper" href="#" title="Case: ${project.client}">
              <picture class="article__image">
                <source srcset="/images/lazy/${project.image}.webp" data-srcset="/images/${project.image}.webp"
                  type="image/webp">
                <source srcset="/images/lazy${project.image}.jpg" data-srcset="/images/${project.image}.jpg"
                  type="image/jpg">
                <img class="article__image lazyload blur-up" src="/images/lazy/${project.image}.jpg"
                  data-src="/images/${project.image}.jpg" alt="${project.client}">
              </picture>
              <span class="article__label">${project.client}</span>
              <h3 class="article__title">${project.title}</h3>
              <span class="article__link" href="#">View case</span>
            </a>
          </article>`

        industries.push(project.industry)

        projectsWrapper.insertAdjacentHTML('beforeend', HTMLMarkup)
      }
    }

    const uniqueIndustries = [...new Set(industries)]

    removeChildren(industrySelect)

    if (uniqueIndustries.length > 1) {
      industrySelect.insertAdjacentHTML('beforeend', `<option>all industries</option>`)
    }

    for (let option of uniqueIndustries) {
      industrySelect.insertAdjacentHTML('beforeend', `<option>${option}</option>`)
    }

    // if (currentCategory === "all work") {
    //   const uniqueIndustriesFromJson = [...new Set(data.map(item => item.industry))]
    //   const currentIndustries = industrySelect.children

    //   for (let industry of uniqueIndustriesFromJson) {
    //     if (industry !== null) {
    //       console.log(industry)
    //       industrySelect.insertAdjacentHTML('beforeend', `<option>${industry}</option>`)
    //     }
    //   }
    // } else {
    //   removeChildren(industrySelect)

    //   for (let option of uniqueIndustries) {
    //     industrySelect.insertAdjacentHTML('beforeend', `<option>${option}</option>`)
    //   }
    // }
  }

  workSelect.addEventListener('change', () => {
    const selectValue = workSelect.options[workSelect.selectedIndex].value;
    const filteredData = filterByWork(selectValue)

    setDataToHTML(filteredData)
  })

  // industrySelect.addEventListener('change', () => {
  //   const selectValue = industrySelect.options[industrySelect.selectedIndex].value;
  //   const filteredData = filterByIndustry(selectValue)
  //   const currentCategory = workSelect.options[workSelect.selectedIndex].value;

  //   setDataToHTML(filteredData, currentCategory)
  // })

})()