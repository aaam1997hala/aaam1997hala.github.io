
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCXzrU5KCshVh6nE6vNcWMKNX-8hQl3GCk",
  authDomain: "concrete-anwar-shatra.firebaseapp.com",
  projectId: "concrete-anwar-shatra",
  storageBucket: "concrete-anwar-shatra.firebasestorage.app",
  messagingSenderId: "793150573127",
  appId: "1:793150573127:web:4d5fc0119c573f63fa7f62",
  measurementId: "G-3VW8YVLSW6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("pourForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const contractorName = document.getElementById("contractorName").value;
    const phone = document.getElementById("phone").value;
    const concreteType = document.getElementById("concreteType").value;
    const truckCount = document.getElementById("truckCount").value;
    const notes = document.getElementById("notes").value;
    const deliveryDate = new Date().toISOString().split('T')[0];

    try {
        await addDoc(collection(db, "deliveries"), {
            contractorName,
            phone,
            concreteType,
            truckCount,
            notes,
            deliveryDate,
            smsSent: false
        });
        document.getElementById("status").textContent = "تم الحفظ بنجاح";
        document.getElementById("pourForm").reset();
    } catch (e) {
        document.getElementById("status").textContent = "فشل في الحفظ: " + e.message;
    }
});
