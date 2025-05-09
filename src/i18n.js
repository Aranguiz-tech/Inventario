import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      welcome: "Bienvenido al Inventario",
      loginPrompt: "Por favor, inicia sesión para continuar.",
      loginGoogle: "Iniciar sesión con Google",
      logout: "Cerrar sesión",
      greeting: "Hola",
      departmentQuestion: "¿A qué departamento quieres ingresar?",
      departmentInfo: "Info del Departamento",
      addRoom: "Agregar Sala",
      addEquipment: "Agregar equipo",
      addDepartment: "Agregar Departamento",
      editDepartments: "Editar Departamentos",
      editDepartment: "Editar Departamento",
      renameDepartment: "Renombrar Departamento",
      newDepartmentName: "Nuevo nombre del departamento",
      newDepartmentNameEs: "Nuevo nombre en español",
      newDepartmentNameEn: "Nuevo nombre en inglés",
      currentDepartment: "Departamento actual",
      rename: "Renombrar",
      renamed: "Renombrado correctamente",
      deleteDepartment: "Eliminar Departamento",
      confirmDeleteDepartment: "¿Seguro que deseas eliminar este departamento?",
      errorClosingSession: "Error al cerrar sesión",
      selectDepartment: "Selecciona un departamento",
      close: "Cerrar",
      add: "Agregar",

      // Inventario
      type: "Tipo",
      brand: "Marca",
      notes: "Observaciones",
      quantity: "Cantidad",
      state: "Estado",
      date: "Fecha",
      accessories: "Complementos",
      delete: "Eliminar",
      maintain: "Mantener",
      improve: "Mejorar",
      replace: "Reemplazar",
      unknown: "Desconocido",
      total: "Total",

      save: "Guardar",
      saved: "Guardado correctamente",
      confirm: "Confirmar",
      cancel: "Cancelar",
      deleted: "Eliminado correctamente",
      errorNoQuantity: "La cantidad total debe ser mayor a 0.",
      noObservations: "Sin observaciones",
      enterNotes: "Escribe tus observaciones aquí...",

      // WiFi y Personal
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

      // Métricas
      summary: "Resumen del Inventario",
      equipmentByState: "Equipos por estado",
      equipmentByType: "Equipos por tipo",
      equipmentByRoomAndType: "Equipos por sala y tipo",
      showMetrics: "Ver métricas",
      hideMetrics: "Ocultar métricas",
      typeSummary: "Cantidad por Tipo",
      stateDistribution: "Distribución de Estados",

      // Exportación
      exportExcel: "Exportar a Excel",
      exportImage: "Exportar imagen",
      downloadImage: "Descargar como imagen",

      // Otros
      backToTop: "Volver al inicio",
      search: "Buscar...",
      correoNoAutorizado: "Correo no autorizado",
      errorInicioSesion: "Error al iniciar sesión. Inténtalo de nuevo.",

      departments: {},
      edit: "Editar",
    },
  },
  en: {
    translation: {
      welcome: "Welcome to the Inventory",
      loginPrompt: "Please log in to continue.",
      loginGoogle: "Sign in with Google",
      logout: "Log out",
      greeting: "Hello",
      departmentQuestion: "Which department would you like to access?",
      departmentInfo: "Department Info",
      addRoom: "Add Room",
      addEquipment: "Add Equipment",
      addDepartment: "Add Department",
      editDepartments: "Edit Departments",
      editDepartment: "Edit Department",
      renameDepartment: "Rename Department",
      newDepartmentName: "New department name",
      newDepartmentNameEs: "New name in Spanish",
      newDepartmentNameEn: "New name in English",
      currentDepartment: "Current department",
      rename: "Rename",
      renamed: "Renamed successfully",
      deleteDepartment: "Delete Department",
      confirmDeleteDepartment: "Are you sure you want to delete this department?",
      errorClosingSession: "Error signing out",
      selectDepartment: "Select a department",
      close: "Close",
      add: "Add",

      // Inventory
      type: "Type",
      brand: "Brand",
      notes: "Notes",
      quantity: "Quantity",
      state: "Condition",
      date: "Date",
      accessories: "Accessories",
      delete: "Delete",
      maintain: "Maintain",
      improve: "Improve",
      replace: "Replace",
      unknown: "Unknown",
      total: "Total",

      save: "Save",
      saved: "Saved successfully",
      confirm: "Confirm",
      cancel: "Cancel",
      deleted: "Deleted successfully",
      errorNoQuantity: "The total quantity must be greater than 0.",
      noObservations: "No observations",
      enterNotes: "Enter your notes here...",

      // WiFi and Staff
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

      // Metrics
      summary: "Inventory Summary",
      equipmentByState: "Equipment by state",
      equipmentByType: "Equipment by type",
      equipmentByRoomAndType: "Equipment by room and type",
      showMetrics: "Show metrics",
      hideMetrics: "Hide metrics",
      typeSummary: "Quantity by Type",
      stateDistribution: "State Distribution",

      // Export
      exportExcel: "Export to Excel",
      exportImage: "Export image",
      downloadImage: "Download as image",

      // Other
      backToTop: "Back to top",
      search: "Search...",
      correoNoAutorizado: "Unauthorized email",
      errorInicioSesion: "Failed to sign in. Please try again.",

      departments: {},
      edit: "Edit",
    },
  },
};

const savedLang = localStorage.getItem("lang") || "es";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang,
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
