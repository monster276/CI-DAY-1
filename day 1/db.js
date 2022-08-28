const person = [
    {
        name: "Alice",
        phone:"(816)-403-5456"
    },
    {
        name: "Bob",
        phone:"(572)-566-2397"
    },
    {
        name: "Cris",
        phone:"(864)-309-4841"
    },
    {
        name: "Alice",
        phone:"(816)-403-5456"
    },
]
person.forEach((item) => {
    const div = document.createElement("div")
    div.innerHTML = `
    <div class="person">
        <p class="personName">${item.name}</p>
        <p class="personNum">${item.phone}</p>
    </div>
    `
    document.querySelector(".info").appendChild(div)
})