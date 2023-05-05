let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// Adiciona cliente
function adicionaCliente(clienteNovo) {
    if (typeof clienteNovo === 'string') {
        clientesTrybeBank.push(clienteNovo);
        return 'Cliente ' + clienteNovo + ' adicionada(o) com sucesso!';
    } else {
        return 'Erro: nome do cliente inválido!';
    }
};

console.log(adicionaCliente('Renato'));
console.log(clientesTrybeBank);

// Remove cliente
function removeCliente(cliente) {
    let clienteEncontrado = false;

    if (typeof cliente === 'string') {
        for (let index = 0; index < removeCliente.length; index += 1) {
            if (cliente === clientesTrybeBank[index]) {
                clientesTrybeBank.splice(index, 1);
                clienteEncontrado = true;
                return 'Cliente excluída(o) com sucesso!';
            }
        }

        if (clienteEncontrado === false) {
            return 'Cliente não encontrada(o)';
        }
    } else {
        return 'Erro: nome do cliente inválido!';
    }
};

console.log(" ");
console.log(removeCliente('Ada'));
console.log(clientesTrybeBank);