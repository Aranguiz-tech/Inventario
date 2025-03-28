import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      welcome: "Bienvenido al Inventario",
      loginPrompt: "Por favor, inicia sesión para continuar.",
      loginGoogle: "Iniciar sesión con Google",
      logout: "Cerrar sesión",
      addEquipment: "Agregar equipo",
      departmentInfo: "Info del Departamento",
      deleteConfirmation: "¿Seguro que deseas eliminar este equipo?",
      showWifi: "Ver WiFi",
      hideWifi: "Ocultar WiFi",
      showStaff: "Ver Personal",
      hideStaff: "Ocultar Personal",
      addWifi: "+ Agregar WiFi",
      addStaff: "+ Agregar Personal",
      name: "Nombre",
      password: "Clave",
      email: "Correo",
      role: "Cargo",
      deleteWifiConfirmation: "¿Estás seguro de eliminar este WiFi?",
      deleteStaffConfirmation: "¿Estás seguro de eliminar este personal?",
      total: "Total",
      type: "Tipo",
      brand: "Marca",
      accessories: "Complementos",
      state: "Estado",
      date: "Fecha",
      quantity: "Cantidad",
      notes: "Observaciones",
      delete: "Eliminar",
      unknown: "Desconocido",
      replace: "Reemplazar",
      improve: "Mejorar",
      maintain: "Mantener",
      confirm: "Confirmar",
      cancel: "Cancelar",
      backToTop: "Volver al inicio",
      departmentQuestion: "¿A qué departamento quieres ingresar?",
      greeting: "Hola",
      correoNoAutorizado: "Correo no autorizado",
      errorInicioSesion: "Error al iniciar sesión. Inténtalo de nuevo.",
      departments: {
        Materiales: "Materiales",
        Computación: "Computación",
        Biblioteca: "Biblioteca",
        Lenguaje: "Lenguaje",
        Ciencias: "Ciencias",
        Matemáticas: "Matemáticas",
        JR: "JR",
        Infant: "Infant",
        PE: "Educación Física",
        Inglés: "Inglés",
        Administración: "Administración",
        Profesores: "Teachers"
      }
    }
  },
  en: {
    translation: {
      welcome: "Welcome to the Inventory",
      loginPrompt: "Please log in to continue.",
      loginGoogle: "Sign in with Google",
      logout: "Log out",
      addEquipment: "Add Equipment",
      departmentInfo: "Department Info",
      deleteConfirmation: "Are you sure you want to delete this item?",
      showWifi: "Show WiFi",
      hideWifi: "Hide WiFi",
      showStaff: "Show Staff",
      hideStaff: "Hide Staff",
      addWifi: "+ Add WiFi",
      addStaff: "+ Add Staff",
      name: "Name",
      password: "Password",
      email: "Email",
      role: "Role",
      deleteWifiConfirmation: "Are you sure you want to delete this WiFi?",
      deleteStaffConfirmation: "Are you sure you want to delete this staff member?",
      total: "Total",
      type: "Type",
      brand: "Brand",
      accessories: "Accessories",
      state: "Condition",
      date: "Date",
      quantity: "Quantity",
      notes: "Notes",
      delete: "Delete",
      unknown: "Unknown",
      replace: "Replace",
      improve: "Improve",
      maintain: "Maintain",
      confirm: "Confirm",
      cancel: "Cancel",
      backToTop: "Back to top",
      departmentQuestion: "Which department would you like to access?",
      greeting: "Hello",
      correoNoAutorizado: "Unauthorised email",
      errorInicioSesion: "Failed to sign in. Please try again.",
      departments: {
        Materiales: "Supplies",
        Computación: "Computing",
        Biblioteca: "Library",
        Lenguaje: "Language",
        Ciencias: "Science",
        Matemáticas: "Maths",
        JR: "JR",
        Infant: "Infant",
        PE: "PE",
        Inglés: "English",
        Administración: "Administration",
        Profesores: "Teachers"
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
