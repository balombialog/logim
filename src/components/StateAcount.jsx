import React from 'react';

export default function StateAcount({ user }) {
  if (!user) {
    return <p>No hay datos disponibles para este usuario.</p>;
  }

  return (
    <div className="bg-gray-100 py-12 px-6 font-light">
      <p>Tus cuentas</p>
      <div className="bg-white px-6 py-4">
        <p><strong>{user.accountType}</strong></p>
        <br />
        <p className="text-sm">Número de cuenta: {user.accountNumber}</p>
        <div className="mt-4">
          <p>Saldo disponible:</p>
          <br />
          <p className="py-2 text-lg font-semibold">${user.balance.toFixed(2)}</p>
        </div>
        <button className="w-full bg-yellow-400 py-2 mt-4 rounded-lg hover:bg-yellow-500 transition-all">
          Conoce más de tu cuenta
        </button>
      </div>
    </div>
  );
}
