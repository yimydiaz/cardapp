import { TipoDTO } from "./tipo";
import { TitularDTO } from "./titular";

export class Tarjeta {
    id: number | undefined | null;

    numValidacion: number | undefined | null;

    estado: string | undefined | null;

    pan: number | undefined | null;

    panMask: string | undefined | null;

    idTitular: number | undefined | null;

    idTipo: number | undefined | null;

    fechaCreacion: Date | undefined | null;

    fechaVencimiento: Date | undefined | null;

    tipoDTO: TipoDTO | undefined | null;

    titularDTO: TitularDTO | undefined | null;
}
