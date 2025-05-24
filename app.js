// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXzrU5KCshVh6nE6vNcWMKNX-8hQl3GCk",
  authDomain: "concrete-anwar-shatra.firebaseapp.com",
  projectId: "concrete-anwar-shatra",
  storageBucket: "concrete-anwar-shatra.appspot.com",
  messagingSenderId: "793150573127",
  appId: "1:793150573127:web:4d5fc0119c573f63fa7f62",
  measurementId: "G-3VW8YVLSW6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById("pourForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const contractorName = document.getElementById("contractorName").value;
  const phone = document.getElementById("phone").value;
  const concreteType = document.getElementById("concreteType").value;
  const truckCount = parseInt(document.getElementById("truckCount").value);
  const notes = document.getElementById("notes").value;
  const deliveryDate = new Date().toISOString();

  try {
    await db.collection("deliveries").add({
      contractorName,
      phone,
      concreteType,
      truckCount,
      notes,
      deliveryDate,
      smsSent: false
    });

    document.getElementById("status").textContent = "تم الحفظ بنجاح";
    document.getElementById("status").style.color = "green";
    document.getElementById("pourForm").reset();
  } catch (error) {
    document.getElementById("status").textContent = "حدث خطأ أثناء الحفظ";
    document.getElementById("status").style.color = "red";
  }
});