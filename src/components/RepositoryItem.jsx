export function RepositoryItem(props) {
  const { repository } = props;
  return (
    <li>
      <strong>{repository?.name ?? "Default"}</strong>
      <p>{repository?.description ?? "Description"}</p>
      <a href={repository?.link ?? "http://github.com"}>Acessar repositorio</a>
    </li>
  );
}
