'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header simple */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Página de Prueba
          </h1>
          <p className="text-lg text-gray-600">
            ¡Funciona perfectamente! ✨
          </p>
        </header>

        {/* Contenido principal */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Test Exitoso
            </h2>
            <p className="text-gray-600 mb-4">
              Esta es una página simple para testing. Todo está funcionando correctamente.
            </p>
            <Button onClick={() => alert('¡Funciona!')}>
              Probar Botón
            </Button>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Componentes
            </h2>
            <p className="text-gray-600 mb-4">
              Usando shadcn/ui y Tailwind CSS para un diseño rápido y limpio.
            </p>
            <div className="flex gap-2">
              <Button variant="outline">Secundario</Button>
              <Button variant="destructive">Eliminar</Button>
            </div>
          </Card>
        </div>

        {/* Footer simple */}
        <footer className="text-center text-gray-500">
          <p>Página de prueba creada con Next.js 🚀</p>
        </footer>
      </div>
    </main>
  )
}