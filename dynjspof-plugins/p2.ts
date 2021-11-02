import MagoPlugin from './plugin';

class P2 implements MagoPlugin {
    title(): string {
        return `PLUGIN 2`;
    }
}

export default P2;