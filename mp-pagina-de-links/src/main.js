import ProfilerData from "../src/profile.json"


  // Seletores do DOM
  const avatar = document.querySelector(".card-header__profile-image")
  const namePerson = document.querySelector(".card-header__name")
  const lastName = document.querySelector(".card-header__last-name")
  const description = document.querySelector(".card-header__descripition")
  const SocialLinks = document.querySelector(".card__social-links")
  const cardLink = document.querySelector(".card__link")


  avatar.src = ProfilerData.profileImage
  avatar.alt = `Foto de perfil de ${ProfilerData.name}`
  avatar.id = "fotoPerfi"

   lastName.textContent = ProfilerData.lastName
  namePerson.textContent = `${ ProfilerData.name}  `

  namePerson.appendChild(lastName)

  description.textContent = ProfilerData.title

  ProfilerData.projects.forEach((links) =>{
    const itemList = document.createElement("li")
    const linksList = document.createElement("a")

    linksList.href = links.href
    linksList.textContent = links.name
    linksList.tag = '_blank'

    itemList.appendChild(linksList)

    cardLink.appendChild(itemList)

  })

ProfilerData.SocialLinks.forEach((RedeSocialLinks)=>{
  const itemList = document.createElement("li")
  const linksList = document.createElement("a")

  const imgList = document.createElement("img")
  
  imgList.src = RedeSocialLinks.icon
  imgList.alt = `${RedeSocialLinks.name} logo`
  linksList.href = RedeSocialLinks.href
  linksList.tag = '_blank'

  linksList.appendChild(imgList)
  itemList.appendChild(linksList)


  SocialLinks.appendChild(itemList)

  console.log(imgList.src)
})
