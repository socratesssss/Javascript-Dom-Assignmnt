const input = document.getElementById("input");
const addbtn = document.getElementById("add");
const ullist = document.getElementById("list");
const count = document.getElementById("counter");
const p1 = document.getElementById("p1");

let completedCount = 0; // Keeps track of completed tasks
const updateCounter = () => {
    count.textContent = completedCount;
};

// Event listener for adding tasks
addbtn.addEventListener("click", (e) => {
    e.preventDefault();
    const Text = input.value.trim();

    if (Text === "") {
        alert("Add your task");
        return;
    }

    // Show the counter paragraph if it's the first task
    p1.classList.remove("hidden");

    // Create new task elements
    const li = document.createElement("li");
    li.className = 'flex justify-between items-center p-3 bg-gray-100 rounded';

    const btnlist = document.createElement("div");
    btnlist.className = "flex";

    const span = document.createElement("span");
    span.textContent = Text;
    span.className = "flex-1";

    const liradio = document.createElement("span");
    liradio.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-2 stroke-2 active:stroke-green-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>`;

    const edtbtn = document.createElement("span");
    edtbtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-2 stroke-2 stroke-black">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>`;

    const dltbtn = document.createElement("span");
    dltbtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-2 stroke-2 active:stroke-red-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>`;

    // Append elements to the list item
    li.appendChild(span);
    li.appendChild(btnlist);
    btnlist.appendChild(liradio);
    btnlist.appendChild(edtbtn);
    btnlist.appendChild(dltbtn);
    ullist.appendChild(li);

    // Clear the input
    input.value = "";

    // Add event listener for the radio button
    liradio.addEventListener("click", () => {
        span.classList.toggle("line-through");

        // Increment or decrement the counter
        if (span.classList.contains("line-through")) {
            completedCount++;
        } else {
            completedCount--;
        }
        updateCounter(); // Update the counter display
    });

    // Add event listener for the delete button
    dltbtn.addEventListener("click", () => {
        if (span.classList.contains("line-through")) {
            completedCount--; // Adjust the counter if the item was completed
        }
        ullist.removeChild(li);
        updateCounter(); // Update the counter display
    });

    // Add event listener for the edit button
    edtbtn.addEventListener("click",()=>{
        const x = edtbtn.textContent === "Save"
         if (!x){
          input.value = span.textContent
          edtbtn.innerHTML = '<p style="color: green;font-weight: 600;">Save</p>'
          addbtn.disabled = true;
          edtbtn.className = "cursor-pointer"
         }else{
          span.textContent = input.value;
         
           input.value = ""
           edtbtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-2 stroke-2 stroke-black">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>`
          addbtn.disabled = false;
         }
      })
});