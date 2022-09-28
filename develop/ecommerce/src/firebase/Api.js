import {
  collection,
  getDocs,
  query,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  setDoc,
  students,
  writeBatch,
  documentId,
  studentsBaseRef,
  where,
} from 'firebase/firestore';
import {db} from './firebase';

// CREATE
export const createItem = async obj => {
  const colRef = collection(db, 'items');
  const data = await addDoc(colRef, obj);
  return data.id;
};

// UPDATE
export const updateItem = async (id, obj) => {
  const colRef = collection(db, 'items');
  await updateDoc(doc(colRef, id), obj);
};

// READ
export const getItems = async () => {
  const colRef = collection(db, 'items');
  const result = await getDocs(query(colRef));
  return getArrayFromCollection(result);
};

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemsByCondition = async value => {
  const colRef = collection(db, 'items');
  const result = await getDocs(query(colRef, where('age', '==', value)));
  return getArrayFromCollection(result);
};

export const getItemById = async id => {
  const colRef = collection(db, 'items');
  const result = await getDoc(doc(colRef, id));
  return result.data();
};

// DELETE
export const deleteItem = async id => {
  const colRef = collection(db, 'items');
  await deleteDoc(doc(colRef, id));
};

const getArrayFromCollection = collection => {
  return collection.docs.map(doc => {
    return {...doc.data(), id: doc.id};
  });
};

// BATCH UPDATE AND
export const batchOperation = async id => {
  const batch = writeBatch(db);

  batch.update(doc(db, 'persons', id), {name: 'test'});
  batch.update(doc(db, 'persons', id), {price: 89});
  batch.commit();
};

// CONSULTAR COLECCION A PARTIR DE SU id
const result = await getDocs(
  query(
    studentsBaseRef,
    where(
      documentId(),
      'in',
      students.map(student => student.id)
    )
  )
);

// JUNTAR LOS DATOS DE DOS DOCUMENTOS DIFERENTES
// const mergedData = students.map(student => {
//   const studentInClassroom = studentsInClassroom.find(({id}) => student.id === id);
//   return {...student, ...studentInClassroom};
// });
