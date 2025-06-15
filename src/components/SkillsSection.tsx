
import { Gravity, MatterBody } from "@/components/ui/gravity";

export function SkillsSection() {
    const skills = [
        { name: "React", x: "20%", y: "10%", color: "bg-sky-500" },
        { name: "Next.js", x: "80%", y: "10%", color: "bg-black" },
        { name: "TypeScript", x: "30%", y: "30%", color: "bg-blue-600" },
        { name: "Node.js", x: "70%", y: "30%", color: "bg-green-600" },
        { name: "Tailwind CSS", x: "50%", y: "20%", angle: 10, color: "bg-teal-500" },
        { name: "Framer Motion", x: "50%", y: "40%", angle: -10, color: "bg-purple-500" },
        { name: "Python", x: "25%", y: "50%", color: "bg-yellow-500" },
        { name: "AWS", x: "75%", y: "50%", color: "bg-orange-500" },
    ];

    return (
        <section id="skills" className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-neutral-900 dark:text-white">
                    Skills & Expertise
                </h2>
                <div className="relative w-full min-h-[400px] h-[60vh] max-h-[600px] rounded-lg border dark:border-neutral-800 bg-white dark:bg-neutral-950 overflow-hidden">
                    <Gravity gravity={{ x: 0, y: 0.7 }} className="w-full h-full">
                        {skills.map((skill) => (
                            <MatterBody
                                key={skill.name}
                                bodyType="circle"
                                matterBodyOptions={{ friction: 0.1, restitution: 0.8 }}
                                x={skill.x}
                                y={skill.y}
                                angle={skill.angle}
                            >
                                <div className={`flex items-center justify-center text-base md:text-lg font-semibold ${skill.color} text-white rounded-full h-24 w-24 md:h-28 md:w-28 text-center p-2`}>
                                    {skill.name}
                                </div>
                            </MatterBody>
                        ))}
                    </Gravity>
                </div>
            </div>
        </section>
    );
}
