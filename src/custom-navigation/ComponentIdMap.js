let componentIdMap = {};

const addComponentId = ({ componentId_Key, componentId, }) => {
  componentIdMap[componentId_Key] = componentId;
};

const removeComponentId = ({ componentId_Key, }) => {
  delete componentIdMap[componentId_Key];
};

const getComponentIdByKey = (componentId_Key: string) => {
  return componentIdMap[componentId_Key];
};

const getKey = () => {
  return Object.keys(componentIdMap);
};

const ComponentIdMap = {
  addComponentId,
  removeComponentId,
  getComponentIdByKey,
  getKey,
};

export default ComponentIdMap;
