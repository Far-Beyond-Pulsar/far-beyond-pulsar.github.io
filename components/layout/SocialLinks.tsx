import {
    IconBrandGithub,
    IconBrandDiscord,
    IconBrandX,
    IconBrandYoutube,
    IconBrandTwitch,
    IconBrandLinkedin,
    IconBrandReddit,
  } from "@tabler/icons-react";
  
  const SocialIcon = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-neutral-400 hover:text-neutral-100 transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
  
  export const SocialLinks = () => (
    <div className="flex gap-4 pt-2">
      <SocialIcon href="https://github.com/pulsar-engine" icon={<IconBrandGithub />} label="GitHub" />
      <SocialIcon href="https://discord.gg/pulsar-engine" icon={<IconBrandDiscord />} label="Discord" />
      <SocialIcon href="https://x.com/PulsarEngine" icon={<IconBrandX />} label="X (Twitter)" />
      <SocialIcon href="https://youtube.com/@PulsarEngine" icon={<IconBrandYoutube />} label="YouTube" />
      <SocialIcon href="https://twitch.tv/PulsarEngine" icon={<IconBrandTwitch />} label="Twitch" />
      <SocialIcon href="https://linkedin.com/company/pulsar-engine" icon={<IconBrandLinkedin />} label="LinkedIn" />
      <SocialIcon href="https://reddit.com/r/PulsarEngine" icon={<IconBrandReddit />} label="Reddit" />
    </div>
  );
  
  export default SocialLinks;