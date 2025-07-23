document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://xvj1rvcr-5000.uks1.devtunnels.ms/add", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  const data = JSON.stringify({
    customer_name: document.querySelector("input[name='customer_name']").value,
  });

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const res = JSON.parse(xhr.responseText);
      console.log("Success:", res);
      alert("Transaction saved.");
    }
  };

  xhr.onerror = function () {
    console.log("Request failed.");
  };

//   xhr.send(data);
});
