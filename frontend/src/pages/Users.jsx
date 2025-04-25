import React, { useEffect, useState } from 'react';
import './Users.css'; // Importar o arquivo CSS para estilização

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para carregar usuários com async/await
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/users`);
        if (!response.ok) {
          throw new Error('Falha ao carregar os usuários');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p className="loading">Carregando usuários...</p>;
  }

  if (error) {
    return <p className="error">Erro: {error}</p>;
  }

  return (
    <section className="user-list">
      <h1 className="section-title">Usuários</h1>
      <div className="card-container">
        {users.length > 0 ? (
          users.map(user => (
            <div key={user.id} className="card">
              <h3 className="card-title">{user.name}</h3>
              <p className="card-email">{user.email}</p>
              <p className="card-info">ID: {user.id}</p>
            </div>
          ))
        ) : (
          <p className="no-users">Nenhum usuário encontrado.</p>
        )}
      </div>
    </section>
  );
}

export default Users;
