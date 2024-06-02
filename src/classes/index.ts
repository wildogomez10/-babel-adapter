import * as fs from 'fs';
import * as path from 'path';
import { EventEmitter } from 'events';
//import { WebSocketServer } from 'ws';
//import * as tsNode from 'ts-node';

// Registrar ts-node para compilar TypeScript sobre la marcha
//tsNode.register();

export class BabelAdapter extends EventEmitter {
    private classesDirectory = path.join(__dirname);
    private classes: { [key: string]: any } = {};
    //private wss: WebSocketServer;

    constructor() {
        super();
        //this.wss = new WebSocketServer({ port: 8080 });
    }

    async loadClasses() {
        const adapterDirectories = fs.readdirSync(this.classesDirectory).filter(dir =>
            fs.statSync(path.join(this.classesDirectory, dir)).isDirectory() && dir.endsWith('Adapter')
        );

        for (const adapterDir of adapterDirectories) {
            const classNameOriginal = adapterDir;
            const className = adapterDir.replace('Adapter', '');

            const classFiles = fs.readdirSync(path.join(this.classesDirectory, adapterDir))
                .filter(file => file.startsWith(`${className}Adapter`));
            const classFileName = classFiles[0]; // Suponiendo que solo hay un archivo con el nombre buscado

            if (classFileName) {
                const classFilePath = path.join(this.classesDirectory, adapterDir, classFileName);
                if (fs.existsSync(classFilePath)) {
                    try {
                        // Usar import dinámico para manejar TypeScript correctamente
                        const ClassModule = await import(classFilePath);
                        this.classes[className] = ClassModule[classNameOriginal];
                    } catch (error) {
                        console.error(`Failed to load class from ${classFilePath}:`, error);
                    }
                } else {
                    console.error(`Class file not found for ${className} in ${adapterDir}`);
                }
            } else {
                console.error(`No class file found for ${className} in ${adapterDir}`);
            }
        }
    }

    watchForChanges() {
        fs.watch(this.classesDirectory, (eventType, filename) => {
            if (eventType === 'rename' && filename?.endsWith('Adapter')) {
                this.loadClasses();
            }
        });
    }

    notifyClients(event: string, className: string, classDefinition: string) {

        console.log(`modulePath en notifyClients() : ${classDefinition}`)
        console.log('enviar caulquier cosa')
        const modddd: string = 'cualquier cosa'

        /*this.wss.clients.forEach(client => {
            if (client.readyState === 1) {
                client.send(JSON.stringify({ event, className, classDefinition }));
            }
        });*/
    }

    /*handleClientConnections() {
        this.wss.on('connection', (ws) => {
            console.log('New client connected');
            ws.send(JSON.stringify({ event: 'connected', message: 'Welcome to Babel-Adapter WebSocket server' }));

            ws.on('message', (message) => {
                console.log(`Received message from client: ${message}`);
            });

            ws.on('close', () => {
                console.log('Client disconnected');
            });
        });
    }*/

    async reloadClasses() {
        this.classes = {};
        await this.loadClasses();
    }

    getClass(className: string) {
        return this.classes[className];
    }

    getClasses() {
        return this.classes;
    }
}