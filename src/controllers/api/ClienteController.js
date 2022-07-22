const clientes = require("../../servicios/clientes");
const logger = require("../../config/logger")


exports.login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: 'Bad Request' })
    } else {
        const cliente = (await clientes.getBy("email", email))[0];
        if(!cliente || cliente.password !== password){
            return res.status(401).json({message: "Acceso denegado"});
        }else{
            return res.json(cliente);
        }
    }
}

exports.register = async (req, res) => {
    const { email, password, nombre, direccion } = req.body;
    if (!email || !password || !nombre || !direccion) {
        res.status(400).json({ message: 'Bad Request' })
    } else {
        const cliente = await clientes.getBy("email", email);
        if (cliente[0]) {
            res.status(400).json({ message: 'User is already registered' })
        }else{
            const nuevo = await clientes.save({email, password, nombre, direccion})
            //const nuevo = {email, password, nombre, direccion};
            res.json(nuevo);
        }
    }
}

// export async function saveUser(user, itemsOrder) {
//     const db = getDB()
//     const clientes = collection(db, "clients")
//     const docRef = await addDoc(clientes, user)
//     return await getDoc(docRef).then(d => {
//         const data = d.data()
//         return { ...data, id: d.id }
//     })
// }

// export async function getBuyerByEmail(email) {
//     const db = getDB()
//     const clientes = collection(db, "clients")
//     const q = query(clientes, where("email", "==", email));
//     const querySnapshot = await getDocs(q);
//     return querySnapshot.docs.map((doc) => {
//         const data = doc.data();
//         return { ...data, id: doc.id };
//     })[0];
// }