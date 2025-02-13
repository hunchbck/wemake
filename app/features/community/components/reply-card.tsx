import { DotIcon, ReplyIcon } from "lucide-react";
import { useState } from "react";
import { Form, Link } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import { Textarea } from "~/common/components/ui/textarea";

interface ReplyCardProps {
  username: string;
  avatarUrl: string;
  content: string;
  timestamp: string;
  topLevel: boolean;
}

export function ReplyCard({
  username,
  avatarUrl,
  content,
  timestamp,
  topLevel = false
}: ReplyCardProps) {
  const [replying, setReplying] = useState(false);
  const toggleReplying = () => setReplying((prev) => !prev);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-2/3 items-start gap-5">
        <Avatar className="size-14">
          <AvatarFallback>{username[0]}</AvatarFallback>
          <AvatarImage src={avatarUrl} />
        </Avatar>
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <Link to={`/users/@${username}`}>
              <h4 className="font-medium">{username}</h4>
            </Link>
            <DotIcon className="size-5" />
            <span className="text-xs text-muted-foreground">{timestamp}</span>
          </div>
          <p>{content}</p>
          <Button variant="ghost" className="self-end" onClick={toggleReplying}>
            <ReplyIcon className="size-4" />
            Reply
          </Button>
        </div>
      </div>
      {replying && (
        <Form className="flex w-3/4 items-start gap-5">
          <Avatar className="size-14">
            <AvatarFallback>N</AvatarFallback>
            <AvatarImage src="https://github.com/microsoft.png" />
          </Avatar>
          <div className="flex w-full flex-col items-end gap-5">
            <Textarea
              placeholder="Write a reply"
              className="w-full resize-none"
              rows={5}
            />
            <Button>Reply</Button>
          </div>
        </Form>
      )}
      {topLevel && (
        <div className="w-full pl-20">
          <ReplyCard
            username="Nicolas"
            avatarUrl="https://github.com/serranoarevalo.png"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
            timestamp="12 hours ago"
            topLevel={false}
          />
        </div>
      )}
    </div>
  );
}
