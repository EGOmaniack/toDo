export const filterPacks = (
  tasks: Array<any>,
  filterText: string
) => tasks.filter(
    (task: any) => task.title.toUpperCase()
        .includes(filterText.toUpperCase())
);