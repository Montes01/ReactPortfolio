import { TablerIcon } from "@tabler/icons-react/dist/esm/tabler-icons-react";
import { memo } from "react";


interface Props {
  Icon: TablerIcon;
  className: string;
  link?: string;
  file?: string;
  target: "_blank" | "_self";
}

function LinkIcon(props: Props) {
  const { Icon, className, link, file, target } = props;

  return (
    <a
      className={className}
      download={Boolean(file)}
      href={link || file || ""}
      target={target}
      title={link}
    >
      <Icon className="w-12 h-12 p-1 m-0 bg-transparent" />
    </a>
  );
}

export default memo(LinkIcon);