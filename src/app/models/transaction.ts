import { Estado } from "./estado";
import { Tarjeta } from "./tarjeta";

export class Transaction {
    id: number | undefined | null;

    idTarjeta: number | undefined | null;

    numeroReferencia: number | undefined | null;

    totalCompra: number | undefined | null;

    direccionCompra: string | undefined | null;

    fechaTransaccion: Date | undefined | null;

    idEstadoTransaccion: number | undefined | null;

    tarjetaDTO: Tarjeta | undefined | null;

    estadoTransaccionDTO: Estado | undefined | null;
}
