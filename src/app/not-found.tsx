export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
      <p className="text-gray-400 mb-8">Trang bạn tìm không tồn tại.</p>
      <a
        href="/"
        className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-lg transition-colors"
      >
        Về trang chủ
      </a>
    </div>
  );
}
