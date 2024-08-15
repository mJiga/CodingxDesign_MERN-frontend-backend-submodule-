function TaskDisplay() {
  return (
    <div className="bg-white shadow-2xl rounded-lg flex flex-col mt-8">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">Task Manager</h3>
      </div>
      <div className="p-4 flex flex-col">
        <ul className="space-y-2">
          <li className="flex items-center bg-gray-100 p-3 rounded">
            <input type="checkbox" className="mr-3" />
            <span>Complete React assignment</span>
          </li>
          <li className="flex items-center bg-gray-50 p-3 rounded">
            <input type="checkbox" className="mr-3" />
            <span>Study for JavaScript exam</span>
          </li>
        </ul>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Add New Task
        </button>
      </div>
    </div>
  );
}

export default TaskDisplay;
