import { createContext, useState } from 'react';

const [ taskData, setTaskData ] = useState(undefined);

const TaskDataContext = createContext({ TaskData, setTaskData });

const TaskDataContextProvider = ( {children} ) => {
  return (
    <TaskDataContext.Provider value={{ TaskData, setTaskData }}>
      {children}
    </TaskDataContext.Provider>
  );
};

export { TaskDataContext, TaskDataContextProvider };