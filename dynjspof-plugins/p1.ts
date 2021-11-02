import MagoPlugin from './plugin';

class P1 implements MagoPlugin {
    title(): string {
        return `PLUGIN 1`;
    }
}

export default P1;