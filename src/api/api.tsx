import TypeProduto from "../Types/TypeProduto"

const url = "http://localhost:3001/"

const api = {

  async buscaProdutos() {
    
    try {
      const response = await fetch(`${url}produtos`)
      const produtos: TypeProduto[] = await response.json()
      return produtos
    } catch (error) {
      alert('Erro ao buscar produtos')
    }
  }

}

export default api;