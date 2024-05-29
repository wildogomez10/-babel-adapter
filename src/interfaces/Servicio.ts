/**
 * Interface que representa los servicios.
 */
export default interface Servicio {

    // Representa la cadena recibida desde el legacy core
    cadena?: string;
    // Representa el retorno del facturador. (JSON,XML, etc)
    retornoFacturador?: object | any;

    // Funcion de procesamiento del mensaje de inicio de la consulta.
    crearMsgConsulta(cadena: string): any;
    // Funcion de procesamiento del mensaje de respuesta de la consulta.
    crearMsgConsultaRespuesta(cadena: string, retornoFacturador: object | any): any;
    // Funcion de procesamiento del mensaje de inicio de la consulta.
    crearMsgPago(cadena: string): any;
    // Funcion de procesamiento del mensaje de respuesta de la Pago.
    crearMsgPagoRespuesta(cadena: string, retornoFacturador: object | any): any;
    // Funcion de procesamiento del mensaje de inicio de la consulta.
    crearMsgAnulacion(cadena: string): any;
    // Funcion de procesamiento del mensaje de respuesta de la Anulacion.
    crearMsgAnulacionRespuesta(cadena: string, retornoFacturador: object | any): any;
}