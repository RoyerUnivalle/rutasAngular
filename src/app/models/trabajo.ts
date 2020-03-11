export class Agenda {

    public idTrabajoAgenda?: number;
    public fecha: number;
    public hora_inicio: number;
    public hora_fin: string;
    public idEspacio: number;
    public idTrabajo: number;
    public espacio: Array<any>;
    public trabajo: Array<Trabajo>;


    constructor(raw: any) {
        if (raw.hasOwnProperty('idTrabajoAgenda')) {
            this.idTrabajoAgenda = raw.idTrabajoAgenda;
        }
        if (raw.hasOwnProperty('fecha')) {
            this.fecha = raw.fecha;
        }
        if (raw.hasOwnProperty('hora_inicio')) {
            this.hora_inicio = raw.hora_inicio;
        }
        if (raw.hasOwnProperty('hora_fin')) {
            this.hora_fin = raw.hora_fin;
        }
        if (raw.hasOwnProperty('idEspacio')) {
            this.idEspacio = raw.idEspacio;
        }
        if (raw.hasOwnProperty('espacio')) {
            this.espacio = raw.espacio;
        }
        if (raw.hasOwnProperty('trabajo')) {
            this.trabajo = raw.trabajo;
        }
    }
}

export class GetAllTrabajos {
    public count: number;
    public trabajo: Agenda[];
    constructor(raw: any) {
        if (raw.hasOwnProperty('count')) {
            this.count = raw.count;
        }
        if (raw.hasOwnProperty('agenda') && Array.isArray(raw.agenda)) {
            this.trabajo = raw.agenda.map((agenda: any) => {
                return new Agenda(agenda);
            });
        }
    }
}

export class Trabajo {

    public id_trabajo?: number;
    public nombre_trabajo: string;


    constructor(raw: any) {
        if (raw.hasOwnProperty('id_trabajo')) {
            this.id_trabajo = raw.id_trabajo;
        }
        if (raw.hasOwnProperty('nombre_trabajo')) {
            this.nombre_trabajo = raw.nombre_trabajo;
        }
    }
}
