import Servicio from "../Servicio";
/**
 * Clase que implementa las funciones para la adaptacion
 * de un servicio proveniente del legacy -> babel-core - legacy 
 */
export class TigoAdapter {
    /**
     * Funcion encargada de representar las funcionalidades
     * para la creacion del mensaje al inicio de la peticion en babel.
     * @param cadena 
     */
    crearMsgConsulta(): any {
        console.log('EJECUTO crearMsgConsulta DE TIGO ADAPTER')
    }

    /**
     * Funcion encargada de representar las funcionalidades
     * para la creacion del mensaje a la respuesta de la peticion en babel.
     * @param cadena 
     * @param retornoFacturador 
     */
    crearMsgConsultaRespuesta(): any {
        console.log('EJECUTO crearMsgConsultaRespuesta DE TIGO ADAPTER')
    }
}