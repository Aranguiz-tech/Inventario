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
      save: "Guardar",
      saved: "Guardado correctamente",
      backToTop: "Volver al inicio",
      departmentQuestion: "¿A qué departamento quieres ingresar?",
      greeting: "Hola",
      correoNoAutorizado: "Correo no autorizado",
      errorInicioSesion: "Error al iniciar sesión. Inténtalo de nuevo.",
      search: "Buscar...",
      exportExcel: "Exportar a Excel",
      exportImage: "Exportar imagen",
      downloadImage: "Descargar como imagen",
      showMetrics: "Ver métricas",
      hideMetrics: "Ocultar métricas",
      summary: "Resumen del Inventario",
      equipmentByState: "Equipos por estado",
      equipmentByType: "Equipos por tipo",
      typeSummary: "Cantidad por Tipo",
      stateDistribution: "Distribución de Estados",
      departments: {},
      edit: "Editar",
      noObservations: "Sin observaciones",
      enterNotes: "Escribe tus observaciones aquí...",
      errorNoQuantity: "La cantidad total debe ser mayor a 0.",
      deleted: "Eliminado correctamente"
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
      save: "Save",
      saved: "Saved successfully",
      backToTop: "Back to top",
      departmentQuestion: "Which department would you like to access?",
      greeting: "Hello",
      correoNoAutorizado: "Unauthorised email",
      errorInicioSesion: "Failed to sign in. Please try again.",
      search: "Search...",
      exportExcel: "Export to Excel",
      exportImage: "Export image",
      downloadImage: "Download as image",
      showMetrics: "Show metrics",
      hideMetrics: "Hide metrics",
      summary: "Inventory Summary",
      equipmentByState: "Equipment by state",
      equipmentByType: "Equipment by type",
      typeSummary: "Quantity by Type",
      stateDistribution: "State Distribution",
      departments: {},
      edit: "Edit",
      noObservations: "No observations",
      enterNotes: "Enter your notes here...",
      errorNoQuantity: "The total quantity must be greater than 0.",
      deleted: "Deleted successfully"
    }
  }
};

const savedLang = localStorage.getItem("lang") || "es";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang,
  fallbackLng: "es",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
