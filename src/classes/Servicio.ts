/**
 * Clase que representa la instancia de un servicio
 * para su adaptación a babel.
 */
export default abstract class Servicio {
    constructor() {
    }

    /**
     * Funcion encargada de representar las funcionalidades
     * para la creacion del mensaje al inicio de la peticion en babel.
     * @param cadena 
     */
    abstract crearMsgConsulta(): any;


    /**
     * Funcion encargada de representar las funcionalidades
     * para la creacion del mensaje a la respuesta de la peticion en babel.
     * @param cadena 
     * @param retornoFacturador 
     */
    abstract crearMsgConsultaRespuesta(): any;

}